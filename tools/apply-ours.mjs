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

// ── 3) 删掉不该存在的文件（上游的自定义域名）──
for (const target of CONFIG.removePaths) {
  const file = path.join(ROOT, target)
  if (fs.existsSync(file)) {
    if (!CHECK) fs.rmSync(file)
    report.push(`删除：${target}`)
  }
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
