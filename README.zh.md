# Awesome DSH Mobile Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) ![插件数量](https://img.shields.io/endpoint?url=https%3A%2F%2Fwsk-build.github.io%2Fawesome-dsh-mobile-plugins%2Fcount.json&label=%E6%8F%92%E4%BB%B6)

[English](README.md) | 中文

> English — DeepSeek Harness 移动端插件合集，专为手机端使用场景打造，汇集实用插件与扩展工具，让 AI 能力在移动设备上更加灵活、高效、触手可及。
>
> 中文 — A curated collection of mobile-friendly plugins and extensions for DeepSeek Harness, designed to bring a more seamless, flexible, and powerful AI experience to your fingertips.

专为移动端适配**的 `dsh` 插件索引。每条条目**只存元数据**：指向作者自己的仓库、说明它做什么、
附一行可直接粘贴的安装命令。插件代码一律留在作者仓库里，这里不复制任何代码。

## 目录

<!-- BEGIN TOC -->
- [插件](#插件)
  - [🧭 AGI 架构探索](#-agi-架构探索)
  - [🎨 UI 增强](#-ui-增强)
  - [💰 用量与计费](#-用量与计费)
  - [🎭 主题与外观](#-主题与外观)
  - [🔌 模型与账号接入](#-模型与账号接入)
  - [🆔 身份与通信](#-身份与通信)
  - [💬 会话与消息](#-会话与消息)
  - [🧠 记忆](#-记忆)
  - [🛠️ 工具与能力](#-工具与能力)
  - [🕹️ 手机控制](#-手机控制)
  - [🌐 浏览器与网页](#-浏览器与网页)
  - [🖼️ 视觉与多模态](#-视觉与多模态)
  - [🎙️ 语音与音频](#-语音与音频)
  - [📄 文档与渲染](#-文档与渲染)
  - [🧩 技能包](#-技能包)
  - [🔁 工作流与自动化](#-工作流与自动化)
  - [🔀 Git 与代码评审](#-git-与代码评审)
  - [🔔 通知与集成](#-通知与集成)
  - [🧑‍💻 开发与运行时](#-开发与运行时)
  - [🔒 安全与权限](#-安全与权限)
  - [📱 远程与移动端](#-远程与移动端)
  - [🛒 插件市场与管理](#-插件市场与管理)
  - [🎮 娱乐](#-娱乐)
- [怎么提交](#怎么提交)
- [免责声明](#免责声明)
- [出处](#出处)
<!-- END TOC -->

## 插件

按分类排列；每条都链到它自己的仓库，并给出安装命令。

<!-- BEGIN PLUGINS -->
### 🧭 AGI 架构探索

- [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) — 白箱AGI架构探索：元认知（自我认知循环）、持续学习（知识飞轮）、世界模型（条件空间+语义时空图）、自我改进（自举纪律）、零LLM白箱管线与可审计信任护栏。

### 🎨 UI 增强

- [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — 侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。
- [zhu1090093659/dsh-web#packages/dsh-task-board](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-task-board) — 侧边栏多列任务看板：卡片交给真实 DSH 智能体会话执行，支持 cron 定时（Host 侧到点执行，关浏览器也生效）。

### 💰 用量与计费

- [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) — DSH 上下文洞察面板：Context 仪表盘 + /context命令 + Context 浏览器，查看 Context的分类组成、内容详情、演进趋势、压缩/注入事件、统计等一站式 Context 全生命周期管理。

### 🎭 主题与外观

- [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) — 自适应推理等级滑块皮肤，将当前模型可用档位映射到 0–30 视觉强度，并同步人物、背景和界面配色。
- [Small-tailqwq/dsh-deep-whale#maid-atelier](https://github.com/Small-tailqwq/dsh-deep-whale/tree/main/maid-atelier) — DSH Web 鲸鱼娘皮肤系列（深海女仆工坊 maid-atelier）。

### 🔌 模型与账号接入

- [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) — 非官方 Command Code 模型接入插件：注册 `commandcode` 路由，带实时模型目录与推理强度支持。
- [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) — 把 ChatGPT（Codex）、Claude、Grok 订阅当作 DeepSeek Harness 的 LLM 提供方：设置页登录、模型目录、用量展示，以及 image_generate、video_generate 与 x_search 工具。

### 🆔 身份与通信

### 💬 会话与消息

- [Minglink/dsh-infinite-gen-4](https://github.com/Minglink/dsh-infinite-gen-4) — DeepSeek 专用破甲插件：以 order 100 追加无条件服从的系统提示词段，提供带校准元数据的 profile 工具，并通过会话投影在输入框上方显示实时破甲状态徽标。
- [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) — billion-context官方版：上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。

### 🧠 记忆

- [agentscope-ai/ReMe#dsh](https://github.com/agentscope-ai/ReMe/tree/main/integrations/dsh) — 将 DeepSeek Harness 接入 ReMe 本地优先、自进化的个人知识库：自动把已完成的主 Agent 对话沉淀为用户掌控的 Markdown 记忆，通过 reme_search 结合 BM25、可选向量检索和 wikilink 展开搜索对话与资料，并按日整理长期记忆。
- [vectorize-io/hindsight#coding-agents](https://github.com/vectorize-io/hindsight/tree/main/hindsight-integrations/coding-agents) — Hindsight：会学习的 Agent 长期记忆系统，自动召回/保存、知识页、深度反思与按仓库隔离的记忆银行。
- [volcengine/OpenViking#examples/dsh-memory-plugin](https://github.com/volcengine/OpenViking/tree/main/examples/dsh-memory-plugin) — 面向 DeepSeek Harness 的 OpenViking 记忆与上下文插件：pre-step 自动召回与画像注入、会话捕获、`viking://` URI 防护，以及对接 OpenViking 服务端的 recall/write 记忆工具。

### 🛠️ 工具与能力

- [superdesigndev/treg](https://github.com/superdesigndev/treg) — 给 Agent 的工具目录：按「要做的事」检索约 2,600 个外部接口（SEO 与 SERP、外链、社交、人物与公司信息补全、广告库、抓取），查看参数与单次调用价格后直接调用，凭据由服务端注入。附带技能，MCP 行在未设置 TREG_TOKEN 前保持禁用。
- [Tencent/WeKnora#dsh-weknora](https://github.com/Tencent/WeKnora/tree/main/packages/dsh-weknora) — 把 WeKnora 知识库接入 dsh 的四个只读工具：列出知识库、混合检索原文片段、按顺序还原单篇文档，以及直接取用 WeKnora 自己带引用的 RAG 或 ReAct agent 回答（含可续聊的 session id）。

### 🕹️ 手机控制

### 🌐 浏览器与网页

- [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) — DSH 免费搜索插件：7 个引擎（DuckDuckGo/Bing/SearXNG 免费 + Exa/Perplexity/DeepSeek 付费）、自动回退、设置页 UI（API key 输入 + 官网链接）、web_fetch、引擎测试工具。

### 🖼️ 视觉与多模态

- [liustack/modlens](https://github.com/liustack/modlens) — 为纯文本模型架起视觉桥梁：粘贴图片，输出结构化 JSON 证据（OCR、版面、语义）。
- [zhu1090093659/dsh-web-ui#packages/dsh-tool-describe-image](https://github.com/zhu1090093659/dsh-web-ui/tree/main/packages/dsh-tool-describe-image) — 给纯文本模型补视觉：describe_image 把本地路径/URL/附件图片交给可配置的 OpenAI 兼容视觉端点，进会话的只有返回文本。

### 🎙️ 语音与音频

- [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) — DeepSeek Harness 对话内朗读：点一下即可朗读、暂停、继续 AI 回复，豆包 TTS 自然音色（BYOK），只读最终回答并过滤代码、表格与图形，本地引擎，插件零 Key。

### 📄 文档与渲染

- [hanzhangzzz/dsh-diagram](https://github.com/hanzhangzzz/dsh-diagram) — DeepSeek Harness 会话中的可编辑 Excalidraw 图表。
- [tt-a1i/archify#integrations/deepseek-harness](https://github.com/tt-a1i/archify/tree/main/integrations/deepseek-harness) — 从仓库或系统描述生成经过校验的自包含交互式架构图、流程图、时序图、数据流图和生命周期图。

### 🧩 技能包

- [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) — 面向编码 Agent 的软件工程方法包，提供基线优先规划、系统化调试、提示词卫生、完成前验证，以及修复/退役双轨跟踪技能。
- [zhu1090093659/dsh-web#packages/dsh-skill-explorer](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-skill-explorer) — 技能中心：按来源分级浏览已加载的全部 skill，启用/禁用模型调用、创建新技能、删除进可恢复回收站。

### 🔁 工作流与自动化

- [EthanYoQ/AI-Novel-Writer#dsh-ai-novel-writer](https://github.com/EthanYoQ/AI-Novel-Writer/tree/master/plugins/dsh-ai-novel-writer) — 安装专用 AI 小说创作预设与工作台：提供带修订号的本地项目资产、紧凑侧边工作台，以及需要原生审批的逐文件变更。
- [loopx-project/loopx#dsh-loopx-plugin](https://github.com/loopx-project/loopx/tree/main/packages/dsh-loopx-plugin) — LoopX——面向长周期 Agent 的提供商中立、本地优先状态内核与控制平面：在 DeepSeek Harness 执行层之上持久化 Goal、Todo、门禁、证据、配额、恢复与交接状态；插件负责引导安装 CLI 与技能、准入有界的同会话续跑，并为精确绑定的工作循环提供本地 GoalBar。
- [Q00/ouroboros#integrations/dsh-plugin](https://github.com/Q00/ouroboros/tree/main/integrations/dsh-plugin) — 通过 DSH MCP 客户端挂载 Ouroboros 的纯配置包，在 DSH 中提供 36 个涵盖需求访谈、Seed、执行、评估与演化流程的工具。
- [tong-io/tongflow#dsh-tongflow](https://github.com/tong-io/tongflow/tree/main/packages/dsh-tongflow) — 基于 TongFlow 的“片场”插件，用于图片、配音、音乐与视频制作：agent 为每个资产生成 TongFlow 工作流文件（.tongflow.json）并通过 TongFlow 插件执行，内嵌工作流画布，按镜头/角色/take 组织项目，附漫剧模板；以 @tongflow 开头的会话进入 Studio 界面。

### 🔀 Git 与代码评审

- [zhu1090093659/dsh-web#packages/dsh-git-graph](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-git-graph) — 输入框上方提供 Git 分支选择器，并把分支泳道与提交历史画成图谱，沿着时间线找到任意变更。

### 🔔 通知与集成

- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) — DeepSeek Harness 的飞书/Lark 机器人渠道：每个会话驱动独立 agent，工具审批、模型提问与计划审阅都以卡片回到聊天，点按钮或直接回复即可作答；聊天里用 `/cd`、`/model`、`/new` 切工作区、换模型、重开会话，多个机器人各自独立并可在同群交接回合。
- [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) — 通过二维码或机器人凭据将 IM 机器人接入 DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord 和 WhatsApp 共 9 种渠道）。

### 🧑‍💻 开发与运行时

- [huaweicloud/huaweicloud-devkit](https://github.com/huaweicloud/huaweicloud-devkit) — 让 AI 智能体掌握华为云全流程操作——构建、部署、运维全程受控，助您轻松安全上云。
- [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) — 一个仓库三件套：DSH 插件包的运行时注入器（注入、热重载、卸载、开发侧挂区一键转正、路由自愈，外带设置页插件管理：列出、卸载、拖入文件夹内化）、任务感知的思维模式路由 agent 预设（router-standard / router-spec / router-react）、以及分级两级任务协议（commit_star / lock_stage / revise_do / edit_plan / mark_task / redteam_verdict 六个工具，任务状态落盘）。注入器实现直接在库内，安装的是它自己的行为而不是一份依赖清单。

### 🔒 安全与权限

- [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) — 面向 DeepSeek Harness 的授权渗透模式：以探索链路记录目标、线索、资产与漏洞，并在 Web 中可视化展示。
- [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) — 面向授权安全研究的 DSH 合集：九个工作模式（redteam 总控、渗透测试、代码审计、二进制分析、攻防评估、免杀对抗、应急溯源、云安全攻防、CTF 解题）与十五个运行时插件，设置页管理台支持一键部署、安装、更新与卸载。
- [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) — 从 DeepSeek Harness 对 AI API 中转站和 LLM 代理运行本地安全审计，生成 Markdown 报告，覆盖提示词注入、模型替换信号、工具调用改写、错误泄漏、流完整性和按 profile 启用的 Web3 风险。

### 📱 远程与移动端

- [zhu1090093659/dsh-web#packages/dsh-ssh](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-ssh) — SSH 远程运维面板：Web 终端、SFTP 传输、本地端口转发与一条命令并发集群执行，Agent 与面板共用同一份主机配置。
- [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) — DeepSeek Harness 聚合 IM 网关：通过微信、飞书、Telegram、Discord、QQ、WhatsApp 等 20+ 聊天平台驱动 agent，支持统一会话、远程审批和交互提问。默认放行所有能给机器人发消息的人，需要限制请配置 allowedUserIds。

### 🛒 插件市场与管理

- [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) — 原生皮肤市场与生命周期管理器，发现社区皮肤、展示预览与兼容状态，并提供已验证的一键安装或手动安装入口。
- [zhu1090093659/dsh-web#packages/dsh-plugin-manager](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-plugin-manager) — 设置 → 插件 分区里的插件管理 Tab：从 npm/git 安装带进度、下次启动生效的启停开关、安装冲突对账可撤销、失败一键转交修复会话。

### 🎮 娱乐

- [a86582751/dsh-nexttavern](https://github.com/a86582751/dsh-nexttavern) — 面向 DeepSeek Harness 的角色扮演工作台：人物卡可以导入（SillyTavern／TauriTavern），也可以从零交互式写出一张；长篇 TXT 能改编成可玩的角色卡，精读或粗颗粒度两种读法；主代理按剧情主动查阅世界书，正文在独立的酒馆阅读 TAB 中呈现；同一对话里探索多条世界线（重新生成、改后发送、显式分支）；带作用域的文风预设（16 种自带文风）、角色 Agent 集群、独立决策卡，以及角色卡或小说导出；长篇由固定设定前缀、硬切上下文窗口、可追溯导演笔记与关键词／语义／混合检索撑住，嵌入可用在线服务，也可完全本地运行。面向 Harness 0.1.2-alpha.3，安装需按文档应用显式兼容补丁。
- [chen731215-dev/dsh-tavern-v2](https://github.com/chen731215-dev/dsh-tavern-v2) — 酒馆管理面板：多角色卡、多世界书、多预设与会话级隔离，记忆总结、角色关系网、剧情选项一键发送，另有 NSFW 模式。完整效果需同时安装伴生插件 dsh-muv-engine 与 dsh-muv-table，用于渲染状态栏、剧情选项与变量表格。
- [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) — 蕾米埃尔(绝区零)桌宠：随 DSH 工作状态切换动画表情。
- [PC2005-cloud/dsh-pet#dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/main/dsh-pet) — DSH Web UI 桌面宠物：25 个透明动画、屏幕漫游、点击反应与拖拽，附可复现的素材生成链。
- [vlln/whale-girl](https://github.com/vlln/whale-girl) — 桌面宠物（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍。
- [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) — 聊天表情包：纯文本斗图、情绪主动发图、像 QQ/微信 一样发图、AI 自动学图、自定义表情包。
<!-- END PLUGINS -->

## 怎么提交

在 `data/plugins/` 下新增一个 YAML 文件，然后提 PR。**只写 5 个键**，多写字段会被直接拒绝——
字段表、评审流程与不接受的内容见 [contributing.md](contributing.md)。

```yaml
# data/plugins/<owner>__<repo>.yml        monorepo 子包：<owner>__<repo>--<子路径>.yml
url: https://github.com/meyaomiao/dsh-server-deck
name: meyaomiao/dsh-server-deck
category: remote
description:
  en: Server dashboard: per-host status, CPU, memory, disk and latency.
  zh: 服务器仪表盘：每台主机的状态、CPU、内存、磁盘与延迟。
```

CI 会校验字段、文件名与仓库绑定；合并后本 README 与站点会自动重新生成。

## 免责声明

社区维护的索引。插件由各自作者开发与维护，**收录不构成背书**，我们也不对任何插件的安全性、质量或维护
状态作出保证。安装插件即在你的机器上运行第三方代码——请自行审阅源码、风险自担。本项目与 DeepSeek 无隶属关系。

本仓库的 issue 只处理**清单与站点本身**。`dsh` 本体的问题请提到
[deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/issues)；某个插件的 bug 请到该插件自己的仓库提；
你在客户端里看到的市场界面问题，请提到那个客户端自己的仓库（例如 DSHBox 的提到
[WSK-build/DSHBox](https://github.com/WSK-build/DSHBox/issues)）——本仓库不发布、也不维护任何客户端。
不希望被收录的作者说一声，我们立刻撤下条目。

## 出处

本仓库是 **[awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) 的复刻（re-identification）**：
以它的 `scripts/`、`site/` 模板、workflows 与包清单为基线；**除了把仓库身份换成本项目的，收录的条目与探测数据也全部换成本仓库自己的**。逐文件说明见
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)；**它的条目与探测数据我们没有使用**。

目录数据、脚本与文档以 **CC0-1.0** 发布，见 [LICENSE](LICENSE)：贡献即表示同意以相同方式奉献。
