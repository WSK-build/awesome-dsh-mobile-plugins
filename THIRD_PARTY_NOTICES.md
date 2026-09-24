# 第三方来源与许可说明

## 1. awesome-dsh-plugin（本仓库的基线）

- 来源：<https://github.com/awesome-dsh-plugin/awesome-dsh-plugin>
- 许可：**CC0-1.0**（公共领域奉献，见其 `LICENSE`；本仓库沿用同一许可）
- 我们使用了什么（**原样复制**，随后按下述方式改动）：
  - `scripts/`：目录构建（`build-site.mjs`）、探针（`probe-*.mjs`）、提交门禁（`check-submission.mjs`）、
    README 生成（`generate-readme.mjs`）、`lib/`（条目模型等）
  - `site/`：页面模板、样式、文案（`locales.mjs`）、隐私页模板与站点素材
  - `.github/workflows/`：构建、PR 校验、README 同步等流程
  - `design-mocks/`、`package.json`、`package-lock.json`、`.gitignore`
  - `LICENSE` 文本（CC0-1.0）
- 我们改了什么：
  1. **身份替换**（4 组字符串，17 个文件，43 处）：仓库地址 → `WSK-build/awesome-dsh-mobile-plugins`；
     站点域名 → `wsk-build.github.io/awesome-dsh-mobile-plugins`；目录 `name` → `awesome-dsh-mobile-plugins`；
     npm 包名 → `dsh-mobile-plugin-catalog`。
  2. 删除 `site/assets/CNAME`（上游的自定义域名）。
  3. **分类改动一处**：`wsl`（🐧 WSL 与 Windows 互操作）改为 `phone`（🕹️ 手机控制），
     用于本项目 DSHBox 的手机操控生态；改动位置与上游相同（`scripts/lib/entries.mjs` 的
     `CAT_IDS`/`CAT_EMOJI`、`site/locales.mjs` 的中英两处）。
  4. 插件数据、探测数据、README 的条目列表：**均替换为我们自己的**，未使用上游数据。
  5. **删除了上游的 contributor 技能桩** `.claude/skills/*` 与 `skills-lock.json`：它们是软链接，
     指向上游 vendored 的 `.agents/skills/`（第三方技能，我们未复制），留着就是断链；本项目不使用它们。
- CC0-1.0 不要求署名；我们仍然在本文件与两份 README 的「出处 / Credits」段注明来源。

## 2. 未使用的部分

- 上游的 `data/plugins/`（其 4287 条插件条目）与其 `data/*.json` 探测数据：**未使用**。
- `dsh-market`：本项目**未使用**其代码；README 中出现的推荐链接与截图来自上游 README 的原文，
  属于同一 CC0 仓库的内容。

## 3. 本仓库的许可

目录数据、脚本与文档以 **CC0-1.0** 发布（沿用上游），见 `LICENSE`。
