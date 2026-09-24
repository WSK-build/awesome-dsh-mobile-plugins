# 贡献指南 / Contributing

本仓库只收录**元数据**：一个插件一个 YAML 文件，指向作者自己的仓库。插件代码、构建产物一律留在作者仓库里。
This repository holds **metadata only**: one YAML file per plugin, pointing at the author's own repository.
Plugin code and build artifacts always stay with their author.

---

## 收录什么 / What we list

**只收「手机上用起来有意义」的插件**：有客户端界面（侧栏、设置页、悬浮层），或者核心能力适合在手机上操作
（远程访问、配对、通知、查看会话……）。纯桌面工具、纯服务端后台这类，在手机上没有落点的，不收。
**We list plugins that make sense on a phone**: something with a client UI (sidebar, settings page, overlay), or a
core capability you would actually use on a phone (remote access, pairing, notifications, reading sessions).
Desktop-only tools and server-only backends have no landing spot on a phone.

理由：本目录是移动端插件的入口。收录一条手机上根本用不了的桌面插件，对用户没有任何价值，只会让清单变长。
Why: this index is a phone-first entry point. Listing a desktop-only plugin a phone user cannot use makes the list
longer without making it better.

## 收录门槛 / What we require

**1. 仓库属于作者自己 / The repository is the author's own.**
`url` 必须指向你要提交的那个插件自己的仓库；如果还提供 `tarball`，它必须来自**同一个**仓库的 Release。
列一个可信仓库、却从别处拉包，是最常见的抢注手法，CI 直接拒绝。
`url` must be the repository of the plugin you are submitting, and a `tarball`, if present, must come from a
release of **that same** repository. Pointing at a trustworthy repo while pulling the package from elsewhere is
the classic squatting move, and CI rejects it.

**2. 不接搬运、复刻与聚合包 / No re-uploads, clones or aggregator bundles.**
必须是作者本人的作品（或被授权代为提交）。聚合包的依赖必须解析到原作者的仓库或其 npm 包——把别人的插件
重新上传到自己账号下再依赖那份副本，不予收录：副本没有 fork 关系、没有署名、也没有上游，用户装到的是别人
作品的一份静默快照。
The work must be yours (or submitted with the author's permission). An aggregator bundle's dependencies must
resolve to the original authors' repositories or their published npm packages. Re-uploading someone else's plugin
under your own account and depending on that copy is not listed: the copy has no fork relationship, no attribution
and no upstream, so a user ends up with a silent snapshot of another person's work.

**3. 必须装得上 / It has to be installable.**
至少要有一条可用的安装路径：
At least one working install path:

| 方式 / Method | 条目里写什么 / What the entry carries | 更新怎么走 / How updates work |
|---|---|---|
| **npm**（首选 / preferred） | 不写命令，构建会按仓库探测出包名 / nothing — the build resolves the package from the repo | 随包管理器 / via the package manager |
| **tarball**（只能装预构建产物时 / when only a prebuilt artifact installs） | 可选 `tarball:` 指向 GitHub Release 的 `.tgz` / optional `tarball:` pointing at a `.tgz` on GitHub Releases | 固定版本，升级要改条目 / pinned; upgrading means editing the entry |
| **源码 / from source** | 也不用写命令，构建拼出 `github:owner/repo` / nothing — the build composes `github:owner/repo` | 跟随仓库默认分支 / follows the default branch |

理由：安装命令由构建拼出，作者写不了命令，也就注入不了 shell 元字符；而"装不上"的条目对用户等于不存在。
Why: the install command is composed by the build, so authors cannot inject shell metacharacters — and an entry
that does not install does not exist as far as a user is concerned.

**4. 仓库要有点年龄 / The repository must have some age.**
CI 要求仓库**创建满 1 天**（本仓库的实际值：`MIN_AGE_DAYS = 1`），并且**不接受已 archived 的仓库**。
CI requires the repository to be **at least 1 day old** (this repository's actual value: `MIN_AGE_DAYS = 1`) and
**refuses archived repositories**.
理由：挡掉"建号即投"与已经废弃的项目——今天建、明天就没人管的仓库，用户装上就是坑。
Why: it filters out freshly-made accounts and abandoned projects. A repo created today and abandoned tomorrow is a
trap for whoever installs it.

**5. 分类要选对 / Pick the right category.**
取值只能是下面 23 个之一（`category` 是**单值**，不是数组）。选贴合插件**实际做的事**的那个，而不是你希望它
出现在哪里；选得不够准的，维护者会直接改，不会打回。
One of these 23 (`category` is a **single value**, not an array). Pick the one matching what the plugin actually
does, not where you would like it to appear; a near miss gets fixed by a maintainer rather than bounced back.

`agi` `ui` `usage` `theme` `model` `identity` `session` `memory` `tools` `phone` `browser` `vision` `voice` `docs` `skill` `workflow` `git` `notify` `dev` `security` `remote` `market` `fun`

（`phone` 🕹️ 手机控制：手机操控生态类；`identity` 🆔 身份与通信：账号、身份、通信通道类。）

## 怎么提交 / How to submit

1. 在 `data/plugins/` 下新增一个 YAML 文件，文件名由 `url` 推出：`<owner>__<repo>.yml`；
   monorepo 子包为 `<owner>__<repo>--<子路径>.yml`（路径里的 `/` 换成 `-`）。
2. 按下例填写——**只允许 5 个键，多写字段直接报错**。
3. 向 `main` 提 PR。**一个 PR 最多 3 条**：一次投几十条，评审只能变成橡皮图章。

1. Add one YAML file under `data/plugins/`, named after `url`: `<owner>__<repo>.yml`; a monorepo subpackage is
   `<owner>__<repo>--<subpath>.yml` (slashes inside the path become dashes).
2. Fill it in as below — **five keys only; an extra field is a hard error**.
3. Open a PR against `main`. **At most 3 entries per PR**: a PR carrying dozens turns review into a rubber stamp.

```yaml
# data/plugins/meyaomiao__dsh-server-deck.yml
url: https://github.com/meyaomiao/dsh-server-deck
name: meyaomiao/dsh-server-deck
category: remote
description:
  en: Server dashboard: per-host status, CPU, memory, disk and latency.
  zh: 服务器仪表盘：每台主机的状态、CPU、内存、磁盘与延迟。
# 可选 / optional —— 只有"只能装预构建产物"时才填 / only when a prebuilt artifact is the only way in
# tarball: https://github.com/owner/repo/releases/download/v1.0.0/pkg.tgz
```

| 键 / Key | 必填 / Required | 说明 / Notes |
|---|---|---|
| `url` | ✅ | `https://github.com/<owner>/<repo>`；子包带 `/tree/<ref>/<路径>` / repo URL; a subpackage adds `/tree/<ref>/<path>` |
| `name` | ✅ | 列表里的显示名；写成 `owner/repo` 时必须与 `url` 同一仓库（名字就是链接文字），`#` 之后是自由标签 / display name; an `owner/repo` name must match the `url`, and `#` introduces a free-form label |
| `category` | ✅ | 上面 23 个之一 / one of the 23 above |
| `description` | ✅ | 至少 `en`，`zh` 可选；**单行**；不接受站点不渲染的语言；不要写空串 / at least `en`, optional `zh`; one line; no locales the site does not render; no empty strings |
| `tarball` | | 可选，GitHub Release 上的 `.tgz` / optional, a `.tgz` on GitHub Releases |

**为什么未知字段直接拒绝**：没人读的字段会让文件对读者显得有含义——上游正是为这个原因拒收未知键（理由写在它的
`scripts/lib/entries.mjs`）。本仓库沿用同一条规则。
**Why unknown fields are refused**: a field nothing reads still looks authoritative to whoever opens the file.
Upstream refuses them for exactly this reason (the rationale is in its `scripts/lib/entries.mjs`), and we keep the
same rule.

## CI 与评审会查什么 / What CI checks

一个 PR 依次过这些（`pr-check.yml`）：
A pull request goes through these (`pr-check.yml`):

1. 提交门禁 `check-submission.mjs`：仓库是否 archived、创建是否满 1 天、清单/manifest、条目与仓库的绑定关系；
2. `generate-readme.mjs --check`：**README 必须与 `data/plugins/` 一致**——你只改条目，README 由 CI 重新生成，
   手改会被判不一致并报错；
3. 站点构建：条目要能让站点成功生成。

1. The submission gate `check-submission.mjs`: archived?, at least 1 day old?, manifest and repository binding.
2. `generate-readme.mjs --check`: **the README must match `data/plugins/`** — change the entry only; the README is
   regenerated by CI and a hand edit is reported as inconsistent.
3. Site build: the entry must let the site generate successfully.

CI 通过是**前置条件，不是结论**：它校验的是形式，判断不了插件是否名副其实、分类是否贴切、是否与已有条目重复。
合并前维护者会实际去读目标仓库。
CI passing is a **precondition, not a verdict**: it checks form, not whether the plugin does what it says, whether
the category fits, or whether it duplicates something already listed. A maintainer reads the target repository
before merging.

## 首次收录通知与撤下 / First-listing notice and removal

条目**首次**合并后，我们会在本仓库的公告 issue 里 @ 你一次——只这一次，说明收录了什么、以及你不想被收录时怎么做。
此后无论条目怎么更新（改描述、改分类、升版本），**都不会再打扰你**。
When an entry is merged for the **first time**, we @ you once in this repository's announcement issue: what was
listed and what to do if you would rather not be. After that, updates to the entry (description, category, version)
**never notify you again**.

**不希望被收录**：回一句或提一个删条目的 PR，我们立刻撤下并记为已通知；撤下后不会被重新收录，除非你要求。
**Prefer not to be listed**: reply or open a PR removing the entry. We take it down immediately and record it as
notified; a removed entry is not re-listed unless you ask.

**更新条目 / Updating an entry**：改你自己的文件再提 PR 即可；废弃或长期无人维护的插件由维护者移除。
Edit your own file and open a PR; a dead or abandoned plugin is removed by a maintainer.

## 可选项 / Optional

- **截图 / Screenshots**：在你自己的仓库里、`package.json` 旁边放一个 `screenshots.json`（monorepo 条目放在对应
  子目录），列出 1–8 个图片路径，市场详情页会像应用商店一样展示。请写**相对路径**——写死在我们这边的绝对链接
  只会无声烂掉。 / Put a `screenshots.json` next to your `package.json` in your own repository (inside the
  subdirectory for a monorepo entry) listing 1–8 image paths. Use **relative paths**; an absolute URL written here
  only rots silently.
- **发布到 npm / Publish to npm**：预构建安装可以跳过 `allowBuilds` 构建授权那一步。
  / A prebuilt install skips the `allowBuilds` approval step.
- **主题与皮肤 / Themes and skins**：说明它替换的是什么（配色、图标、布局），以及是否与官方主题共存。
  / Say what it replaces (colors, icons, layout) and whether it coexists with the official theme.

## 许可 / License

本仓库的目录数据、脚本与文档以 **CC0-1.0** 发布：提交即表示同意以相同方式奉献。条目指向的插件，其许可由作者自己决定。
Catalog data, scripts and docs are published under **CC0-1.0**: submitting means agreeing to the same dedication.
The plugins an entry points at are licensed by their own authors.
