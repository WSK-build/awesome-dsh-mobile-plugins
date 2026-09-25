// 把「我们的补丁」重新打到从上游同步过来的代码上。本地与 CI 都跑这一个脚本。
//
// 为什么需要它：我们以上游 awesome-dsh-plugin 的源码为基线，只改了身份串与一个分类
// （wsl → phone）。按路径把上游的新代码取过来后，这两处改动会被还原——除非重新打一遍。
//
// 作用域：**只改 syncPaths 里的文件**，并在其中跳过 neverSwap。
// （在全仓范围替换是错的：它会把我们署名段里"上游仓库地址"改成我们自己的地址，
//   还会把本配置文件自身的替换表改坏——那是第一版的真实事故。）
//
// 用法：
//   node tools/apply-ours.mjs                      # 打补丁（就地写文件）
//   node tools/apply-ours.mjs --check              # 只报告，不写文件
//   node tools/apply-ours.mjs --print-sync-paths   # 输出同步路径，供 git checkout 用
//
// 退出码：0 正常；1 出现 drift（上游改了我们依赖的那行文本，脚本不敢猜）。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'ours.config.json'), 'utf8'))
const CHECK = process.argv.includes('--check')

if (process.argv.includes('--print-sync-paths')) {
  console.log(CONFIG.syncPaths.join(' '))
  process.exit(0)
}

// 归我们所有的文件（站点模板/文案/素材）：同步时按目录取件排不掉单文件，
// 所以工作流取完件后会用这份清单 `git checkout HEAD -- …` 把我们的版本还原回来。
if (process.argv.includes('--print-ours-owned')) {
  console.log((CONFIG.oursOwned || []).join(' '))
  process.exit(0)
}

const TEXT_EXT = new Set(['.mjs', '.js', '.json', '.yml', '.yaml', '.md', '.html', '.css', '.txt', '.svg'])
const SKIP_DIRS = new Set(['.git', 'node_modules', 'docs'])
const problems = []
const report = []

function rel(file) {
  return path.relative(ROOT, file).replaceAll('\\', '/')
}

// 行尾无关的文本匹配。配置里的补丁文本一律是 LF，但 Windows 检出（core.autocrlf）
// 会把仓库文件写成 CRLF —— 直接 includes 会匹配不上，于是本地报假 drift，CI（Linux）却是绿的。
// 做法：把补丁文本编译成「换行处容忍 \r\n」的正则；命中后按**命中片段自身的行尾**写回，
// 这样既不改写文件其它位置的行尾，混合行尾的文件也不会被整体规范化。
function eolPattern(s) {
  const escaped = s.replace(/\r\n/g, '\n').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(escaped.replace(/\n/g, '\\r?\\n'))
}

/** 判定文件使用的行尾：全 CRLF 或全 LF 直接返回；混杂时取多数（插入的文本跟随多数派）。 */
function detectEol(text) {
  const crlf = (text.match(/\r\n/g) || []).length
  const lf = (text.match(/(?<!\r)\n/g) || []).length
  if (crlf === 0) return '\n'
  if (lf === 0) return '\r\n'
  return crlf >= lf ? '\r\n' : '\n'
}

/** 把文本的换行统一换成给定的行尾风格：先归一成 LF 再转换，避免 \r\n 被二次处理成 \r\r\n。 */
function asEol(text, eol) {
  const lf = text.replace(/\r\n/g, '\n')
  return eol === '\r\n' ? lf.replace(/\n/g, '\r\n') : lf
}

/** 作用域内的文件清单：syncPaths 下的文本文件，去掉 neverSwap。 */
function scopeFiles() {
  const out = []
  const never = new Set(CONFIG.neverSwap)
  const owned = CONFIG.oursOwned || []
  const visit = (full) => {
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      for (const name of fs.readdirSync(full)) {
        if (SKIP_DIRS.has(name)) continue
        visit(path.join(full, name))
      }
      return
    }
    if (!TEXT_EXT.has(path.extname(full).toLowerCase())) return
    if (never.has(rel(full))) return
    // 归我们所有的（含整目录）一律不碰——它们是我们改造过的
    if (owned.some((item) => rel(full) === item || rel(full).startsWith(item + '/'))) return
    out.push(full)
  }
  for (const item of CONFIG.syncPaths) {
    const full = path.join(ROOT, item)
    if (fs.existsSync(full)) visit(full)
  }
  return out
}

const files = scopeFiles()

// ── 1) 身份替换（仅在作用域内）──
let swapCount = 0
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8')
  let after = before
  for (const [from, to] of CONFIG.identitySwaps) {
    if (after.includes(from)) {
      swapCount += after.split(from).length - 1
      after = after.replaceAll(from, to)
    }
  }
  if (after !== before) {
    if (!CHECK) fs.writeFileSync(file, after)
    report.push(`身份替换：${rel(file)}`)
  }
}

// ── 2) 分类改名：逐处精确替换；目标已在就跳过，源也不在就报 drift ──
const rename = CONFIG.categoryRename
const categoryEdits = [
  ['scripts/lib/entries.mjs', `'${rename.fromId}'`, `'${rename.toId}'`],
  ['scripts/lib/entries.mjs', `${rename.fromId}: '${rename.fromEmoji}'`, `${rename.toId}: '${rename.toEmoji}'`],
  ['site/locales.mjs', `${rename.fromId}: '${rename.fromLabelEn}'`, `${rename.toId}: '${rename.toLabelEn}'`],
  ['site/locales.mjs', `${rename.fromId}: '${rename.fromLabelZh}'`, `${rename.toId}: '${rename.toLabelZh}'`],
]
for (const [target, from, to] of categoryEdits) {
  const file = path.join(ROOT, target)
  if (!fs.existsSync(file)) {
    problems.push(`分类补丁：缺少文件 ${target}（上游可能改了结构）`)
    continue
  }
  const text = fs.readFileSync(file, 'utf8')
  if (text.includes(to)) continue // 已打好
  if (!text.includes(from)) {
    problems.push(`分类补丁 drift：${target} 里既没有 ${JSON.stringify(to)} 也没有 ${JSON.stringify(from)}`)
    continue
  }
  if (!CHECK) fs.writeFileSync(file, text.replaceAll(from, to))
  report.push(`分类补丁：${target}  ${from} → ${to}`)
}

// ── 2b) 声明式文本补丁：保住我们对上游文件的少量改动（清单见 ours.config.json）──
// 为什么需要：这些文件不在 oursOwned 里，每次取件都会被上游版本覆盖，少量自改会丢。
// 语义与分类补丁一致：已含 to 就跳过；既无 to 也无 from 记 drift；否则把 from 替换为 to。
for (const item of CONFIG.replacements || []) {
  const file = path.join(ROOT, item.file)
  if (!fs.existsSync(file)) {
    problems.push(`文本补丁：缺少文件 ${item.file}`)
    continue
  }
  const text = fs.readFileSync(file, 'utf8')
  // 匹配与写回都走 eolPattern，CRLF 检出下也能命中（见该函数上方说明）
  const fromRe = eolPattern(item.from)
  if (eolPattern(item.to).test(text)) continue // 已打好
  const hit = fromRe.exec(text)
  if (!hit) {
    problems.push(`文本补丁 drift：${item.file} 里既没有目标文本也没有源文本（源文本：${JSON.stringify(item.from)}）`)
    continue
  }
  if (!CHECK) {
    const globalRe = new RegExp(fromRe.source, 'g')
    fs.writeFileSync(file, text.replace(globalRe, () => asEol(item.to, detectEol(text))))
  }
  report.push(`文本补丁：${item.file}（源文本首行：${JSON.stringify(item.from.split('\n')[0])}）`)
}

// ── 3) 删掉不该存在的文件（上游的自定义域名）──
for (const target of CONFIG.removePaths) {
  const file = path.join(ROOT, target)
  if (fs.existsSync(file)) {
    if (!CHECK) fs.rmSync(file)
    report.push(`删除：${target}`)
  }
}

// ── 3b) 剥掉上游同步带回来、但我们不要的工作流步骤 ──
// 为什么需要：上游 build-site.yml 里有「把更新说明发到 npm」这一步，那是给它自己的包用的；
// 我们既没有更新说明数据、也不该往别人的包里发东西，所以每次同步后整段删掉。
// 不要用 hashFiles(...) 之类做条件：CI 的 probe-updates.mjs 会**生成** data/updates.json，
// 判断条件时文件已存在（踩过：守卫放行 → 仍去发上游的包 → 404）。
for (const item of CONFIG.stripWorkflowSteps || []) {
  const file = path.join(ROOT, item.file)
  if (!fs.existsSync(file)) {
    problems.push(`剥步骤：缺少文件 ${item.file}`)
    continue
  }
  // 拆成「行内容」与「行尾」两份，删除后按原样拼回：文件的行尾风格（LF / CRLF / 混合）不被改写。
  const parts = fs.readFileSync(file, 'utf8').split(/(\r?\n)/)
  const lines = parts.filter((_, idx) => idx % 2 === 0)
  const i = lines.findIndex((l) => l.trim() === `- name: ${item.step}`)
  if (i < 0) {
    // --check 跑在补丁已应用的树上：步骤不存在就是预期终态（我们提交的版本本来已剥掉），记 report；
    // apply 跑在刚取件的树上：步骤不存在说明上游改了步骤名/写法，少剥一步必须有信号（drift → exit 1）。
    if (CHECK) report.push(`剥步骤：${item.file} → ${item.step} 已不存在（视为已剥）`)
    else problems.push(`剥步骤 drift：${item.file} 里找不到步骤 ${JSON.stringify(item.step)}（上游可能改了步骤名）`)
    continue
  }
  let k = i
  while (k > 0 && lines[k - 1].trim().startsWith('#')) k--    // 连上方紧邻的注释一起删
  const indent = lines[i].length - lines[i].trimStart().length
  let j = i + 1
  // 结束于「缩进不大于该 - name: 行的下一个 `- ` 行」（同级或更外层的下一个步骤）；
  // 不按固定 6 空格判断，run: | 体内恰好 6 空格的 `- ` 行不会提前截断。
  while (j < lines.length) {
    const m = lines[j].match(/^(\s*)- /)
    if (m && m[1].length <= indent) break
    j++
  }
  // 丢掉 [k, j) 这些行（连同它们各自后面的分隔符），其余原样保留
  const kept = []
  for (let idx = 0; idx < parts.length; idx += 2) {
    if (idx / 2 >= k && idx / 2 < j) continue
    kept.push(parts[idx], parts[idx + 1] ?? '')
  }
  if (!CHECK) fs.writeFileSync(file, kept.join(''))
  report.push(`剥掉步骤：${item.file} → ${item.step}（${j - k} 行）`)
}

// ── 4) 收尾自检：作用域内不应再有上游身份串（neverSwap 之外）──
for (const file of scopeFiles()) {
  const text = fs.readFileSync(file, 'utf8')
  for (const [from] of CONFIG.identitySwaps) {
    if (text.includes(from)) problems.push(`补丁后仍存在上游身份串 ${JSON.stringify(from)}：${rel(file)}`)
  }
}

console.log(report.length ? report.join('\n') : '无需改动（补丁已是当前状态）')
if (swapCount) console.log(`身份替换共 ${swapCount} 处`)
if (problems.length) {
  console.error('\n发现 ' + problems.length + ' 个问题：')
  for (const line of problems) console.error('  ✗ ' + line)
  process.exit(1)
}
console.log(CHECK ? '检查通过（未写文件）' : '补丁已应用，状态一致')
