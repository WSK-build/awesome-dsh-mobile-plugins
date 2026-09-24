// 首次收录通知：把「从未通知过」的条目作者 @ 到我们仓库的公告 issue 里。
//
// 纪律（写在配置里，也写在这里）：
//   1) **每位作者只通知一次**——已通知的记在 data/notified.json（url → 日期），永不重发，
//      条目之后怎么更新都不再打扰；
//   2) 只在我们**自己仓库**的 issue 里留言，不去别人的仓库刷评论；
//   3) 默认只做计划（不写任何东西、不发任何东西）；真要发必须同时给 --apply --yes。
//
// 用法：
//   node tools/announce.mjs                 # 打印计划：谁会被通知、发什么内容（不写文件）
//   node tools/announce.mjs --apply --yes --issue 1 [--limit 5]
//       需要已登录的 gh（或 CI 里的 GH_TOKEN），会往 issue 里逐条留言并记账。
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'announce.config.json'), 'utf8'))
const LEDGER = path.join(ROOT, 'data', 'notified.json')
const args = process.argv.slice(2)
const flag = (name) => args.includes(name)
const value = (name, fallback = null) => {
  const i = args.indexOf(name)
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback
}

const apply = flag('--apply')
const confirmed = flag('--yes')
const issue = value('--issue')
const limit = Number(value('--limit', String(CONFIG.batchSize)))

// 读条目（源就是 data/plugins/*.yml；这里只需 url 与 owner/repo，故直接解析最小字段）
const entryDir = path.join(ROOT, 'data', 'plugins')
const entries = fs.readdirSync(entryDir).filter((f) => f.endsWith('.yml')).map((f) => {
  const text = fs.readFileSync(path.join(entryDir, f), 'utf8')
  const url = (text.match(/^url:\s*(\S+)/m) || [])[1]
  const name = (text.match(/^name:\s*(.+)$/m) || [])[1]?.trim()
  const repo = url.replace('https://github.com/', '').split('/').slice(0, 2).join('/')
  const sub = name?.includes('#') ? name.split('#')[1] : null
  return { url, repo, owner: repo.split('/')[0], sub }
}).filter((e) => e.url)

const ledger = fs.existsSync(LEDGER) ? JSON.parse(fs.readFileSync(LEDGER, 'utf8')) : {}

// 按作者归并（同一仓库的多个子包合并成一条，避免同一位作者被 @ 多次）
const byOwner = new Map()
for (const e of entries) {
  if (ledger[e.url]) continue           // 已通知过：永不重发
  if (!byOwner.has(e.owner)) byOwner.set(e.owner, [])
  byOwner.get(e.owner).push(e)
}

const origin = 'https://github.com/WSK-build/awesome-dsh-mobile-plugins'
const planned = [...byOwner.entries()].slice(0, limit).map(([owner, list]) => {
  const repos = [...new Set(list.map((e) => e.repo))]
  // 只列仓库名：子包那点信息不值得为它拼出中英两套括号（早先版本把中文括号塞进了英文句子）
  const desc = repos.map((repo) => `\`${repo}\``).join(' + ')
  const body = `@${owner}\n\n` + CONFIG.commentZh.replace('{entries}', desc).replace('{origin}', origin)
    + '\n\n' + CONFIG.commentEn.replace('{entries}', desc).replace('{origin}', origin)
  return { owner, url: list[0].url, body }
})

console.log(`待通知作者：${byOwner.size} 位（已通知过 ${Object.keys(ledger).length} 条条目）`)
console.log(`本次计划：${planned.length} 位（--limit ${limit}）\n`)
for (const item of planned) {
  console.log('─'.repeat(72))
  console.log(item.body)
}

if (!apply) {
  console.log('\n（这是计划，未写文件、未发送。要发：--apply --yes --issue <公告 issue 编号>）')
  process.exit(0)
}
if (!confirmed || !issue) {
  console.error('拒绝执行：必须同时给 --apply --yes --issue <编号>')
  process.exit(1)
}

for (const item of planned) {
  execFileSync('gh', ['api', `repos/WSK-build/awesome-dsh-mobile-plugins/issues/${issue}/comments`,
    '-f', `body=${item.body}`], { stdio: 'inherit' })
  ledger[item.url] = new Date().toISOString().slice(0, 10)
  console.log(`已通知 @${item.owner}`)
}
fs.writeFileSync(LEDGER, JSON.stringify(ledger, null, 2) + '\n')
console.log(`\n已记账到 data/notified.json（共 ${Object.keys(ledger).length} 条），请提交该文件——它是"只发一次"的唯一依据。`)
