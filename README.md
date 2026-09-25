# Awesome DSH Mobile Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) ![plugin count](https://img.shields.io/endpoint?url=https%3A%2F%2Fwsk-build.github.io%2Fawesome-dsh-mobile-plugins%2Fcount.json)

English | [中文](README.zh.md)

## Contents

<!-- BEGIN TOC -->
- [Plugins](#plugins)
  - [AGI Architecture Exploration](#agi-architecture-exploration)
  - [UI Enhancements](#ui-enhancements)
  - [Usage & Billing](#usage--billing)
  - [Themes & Appearance](#themes--appearance)
  - [Models & Providers](#models--providers)
  - [Identity & Communication](#identity--communication)
  - [Sessions & Messages](#sessions--messages)
  - [Memory](#memory)
  - [Tools & Capabilities](#tools--capabilities)
  - [Phone Control](#phone-control)
  - [Browser & Web](#browser--web)
  - [Vision & Multimodal](#vision--multimodal)
  - [Voice & Audio](#voice--audio)
  - [Docs & Rendering](#docs--rendering)
  - [Skills](#skills)
  - [Workflow & Automation](#workflow--automation)
  - [Git & Code Review](#git--code-review)
  - [Notifications & Integrations](#notifications--integrations)
  - [Development & Runtime](#development--runtime)
  - [Security & Permissions](#security--permissions)
  - [Remote & Mobile](#remote--mobile)
  - [Plugin Markets & Managers](#plugin-markets--managers)
  - [Just for Fun](#just-for-fun)
- [How to submit](#how-to-submit)
- [Disclaimer](#disclaimer)
- [Credits](#credits)
<!-- END TOC -->

## Plugins

Grouped by category; every entry links to its own repository and shows its install command.

<!-- BEGIN PLUGINS -->
### AGI Architecture Exploration

- [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) - White-box AGI architecture exploration: metacognition (self-cognition loop), continual learning (knowledge flywheel), world model (condition space, spatiotemporal memory graph), self-improvement (bootstrap discipline), zero-LLM white-box pipeline, and auditable trust guardrails.

### UI Enhancements

- [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) - Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs.
- [zhu1090093659/dsh-web#packages/dsh-task-board](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-task-board) - Task board for the dsh web GUI: a sidebar multi-column kanban whose cards run in real DSH agent sessions and can also be scheduled with cron expressions, executed host-side even with the browser closed.

### Usage & Billing

- [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) - DSH context insight panel: Context dashboard + /context command + Context browser — one-stop context lifecycle management with categorized composition, content details, evolution trends, compaction/injection events, and stats.

### Themes & Appearance

- [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) - Adaptive reasoning slider skin that maps each model's available reasoning efforts onto a 0–30 visual intensity scale, with synchronized portraits, background, and interface colors.
- [Small-tailqwq/dsh-deep-whale#maid-atelier](https://github.com/Small-tailqwq/dsh-deep-whale/tree/main/maid-atelier) - Whale-girl skin series for the DSH Web UI (maid-atelier).

### Models & Providers

- [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) - Unofficial Command Code LLM provider: registers a `commandcode` route with a live model catalog and reasoning-effort support.
- [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) - Use ChatGPT (Codex), Claude, and Grok subscriptions as DeepSeek Harness LLM providers, with Settings login, model catalogs, usage, plus image_generate, video_generate, and x_search tools.

### Identity & Communication

### Sessions & Messages

- [Minglink/dsh-infinite-gen-4](https://github.com/Minglink/dsh-infinite-gen-4) - System-prompt armor plugin for DeepSeek models: appends an unconditional-compliance prompt section at order 100, exposes a profile tool with calibration metadata, and shows a realtime armor-status badge driven by a session projection.
- [ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) - The official billion-context plugin: a context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).

### Memory

- [agentscope-ai/ReMe#dsh](https://github.com/agentscope-ai/ReMe/tree/main/integrations/dsh) - Connects DeepSeek Harness to ReMe's local-first, self-evolving personal knowledge base: automatically captures completed main-agent conversations as user-owned Markdown memory, searches conversations and source material through reme_search with BM25, optional embeddings, and wikilink expansion, and schedules daily memory consolidation.
- [vectorize-io/hindsight#coding-agents](https://github.com/vectorize-io/hindsight/tree/main/hindsight-integrations/coding-agents) - Hindsight, agent memory that learns: long-term project memory with auto recall and retain, knowledge pages, deep reflection, and per-repo memory banks.
- [volcengine/OpenViking#examples/dsh-memory-plugin](https://github.com/volcengine/OpenViking/tree/main/examples/dsh-memory-plugin) - OpenViking memory and context bundle for DeepSeek Harness: pre-step auto-recall and profile injection, session capture, `viking://` URI guarding, and recall/write memory tools backed by an OpenViking server.

### Tools & Capabilities

- [superdesigndev/treg](https://github.com/superdesigndev/treg) - Tool catalog for agents: search ~2,600 external endpoints (SEO and SERP, backlinks, social, people and company enrichment, ad libraries, scraping) by the task you want done, read each one's parameters and per-call price, then call it with the credential injected server-side. Ships the skill plus an MCP row that stays disabled until TREG_TOKEN is set.
- [Tencent/WeKnora#dsh-weknora](https://github.com/Tencent/WeKnora/tree/main/packages/dsh-weknora) - Four read-only tools over a WeKnora knowledge base: list knowledge bases, hybrid passage search, reassemble one document's chunks in order, and WeKnora's own cited RAG or ReAct-agent answer with a resumable session id.

### Phone Control

### Browser & Web

- [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) - Free, keyless web search for DSH: 7 engines (DuckDuckGo/Bing/SearXNG free + Exa/Perplexity/DeepSeek paid), auto-failover, settings-page UI with API key inputs and official links, web_fetch, and an engine test tool.

### Vision & Multimodal

- [liustack/modlens](https://github.com/liustack/modlens) - Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics).
- [zhu1090093659/dsh-web-ui#packages/dsh-tool-describe-image](https://github.com/zhu1090093659/dsh-web-ui/tree/main/packages/dsh-tool-describe-image) - A `describe_image` vision tool for text-only models: images (local path, URL, attachment) go to a configurable OpenAI-compatible vision endpoint and only the returned text enters the session.

### Voice & Audio

- [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) - In-chat read-aloud for DeepSeek Harness: tap to read, pause and resume AI replies with natural Doubao TTS voices (BYOK), reading only the final answer with code, tables and diagrams filtered; local engine, plugin keeps no API key.

### Docs & Rendering

- [hanzhangzzz/dsh-diagram](https://github.com/hanzhangzzz/dsh-diagram) - Editable Excalidraw diagrams for DeepSeek Harness conversations.
- [tt-a1i/archify#integrations/deepseek-harness](https://github.com/tt-a1i/archify/tree/main/integrations/deepseek-harness) - Generate validated, self-contained interactive architecture, workflow, sequence, data-flow, and lifecycle diagrams from repositories or system descriptions.

### Skills

- [GanyuanRan/Aegis](https://github.com/GanyuanRan/Aegis) - Software-engineering method pack for coding agents, with skills for baseline-first planning, systematic debugging, prompt hygiene, verification before completion, and repair/retirement tracking.
- [zhu1090093659/dsh-web#packages/dsh-skill-explorer](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-skill-explorer) - Skill center for the dsh web GUI: browse all loaded skills grouped by source, enable or disable model invocation, create new skills, and delete into a recoverable trash.

### Workflow & Automation

- [EthanYoQ/AI-Novel-Writer#dsh-ai-novel-writer](https://github.com/EthanYoQ/AI-Novel-Writer/tree/master/plugins/dsh-ai-novel-writer) - Installs a dedicated AI novel-writing preset and workbench: revisioned local project assets, a compact side drawer, and native approval-gated single-file changes.
- [loopx-project/loopx#dsh-loopx-plugin](https://github.com/loopx-project/loopx/tree/main/packages/dsh-loopx-plugin) - LoopX, a provider-neutral, local-first state kernel and control plane for long-horizon agents: keeps Goal, Todo, gate, evidence, quota, recovery, and handoff state above DeepSeek Harness, while the plugin bootstraps the CLI and skills, admits bounded same-session continuation, and adds a loopback GoalBar for the exact bound loop.
- [Q00/ouroboros#integrations/dsh-plugin](https://github.com/Q00/ouroboros/tree/main/integrations/dsh-plugin) - Config-only bundle that mounts Ouroboros through the DSH MCP client, exposing 36 interview, Seed, execution, evaluation, and evolution workflow tools in DSH.
- [tong-io/tongflow#dsh-tongflow](https://github.com/tong-io/tongflow/tree/main/packages/dsh-tongflow) - TongFlow film-crew studio for image, voice, music and video production: the agent writes per-asset TongFlow workflow files (.tongflow.json) that run through TongFlow plugins, with an embedded workflow canvas, a shot/character/take project layout and a manga-drama template; sessions starting with @tongflow open the Studio view.

### Git & Code Review

- [zhu1090093659/dsh-web#packages/dsh-git-graph](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-git-graph) - Git branch selector and Git graph for the dsh web GUI: switch branches and explore branch-lane and commit history from the conversation header.

### Notifications & Integrations

- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) - Lark/Feishu bot channel for DeepSeek Harness: each chat drives its own agent, and tool approvals, model questions, and plan reviews return as cards answered by a button or a reply. Switch workspace and model from the chat (`/cd`, `/model`, `/new`), and run several bots that keep separate sessions and can hand turns to each other in one group.
- [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) - Connect IM bots to DeepSeek Harness via QR codes or bot credentials (9 channels: Feishu, WeChat, DingTalk, WeCom, QQ, Slack, Telegram, Discord, and WhatsApp).

### Development & Runtime

- [huaweicloud/huaweicloud-devkit](https://github.com/huaweicloud/huaweicloud-devkit) - HuaweiCloud DevKit gives AI agents complete command of Huawei Cloud — build, deploy, operate, always governed, always secure.
- [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) - One repository, three parts: a runtime injector for DSH plugin packages (inject, hot-reload, unload, promote a dev staging tool to the front, route self-heal, plus a settings-page plugin manager that lists, unloads and drags folders in to internalize), a task-aware reasoning-mode router agent preset (router-standard / router-spec / router-react), and a graded two-level task protocol whose six tools (commit_star, lock_stage, revise_do, edit_plan, mark_task, redteam_verdict) pin task state to disk. The injector implementation ships in-tree, so the install carries its own behaviour rather than a dependency list.

### Security & Permissions

- [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) - Authorized pentest mode for DeepSeek Harness — exploration chain, assets and findings with a Web view.
- [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) - Authorized-security DSH collection: nine work modes (redteam coordinator, pentest, code audit, binary analysis, attack-defense, AV evasion, incident response, cloud security, CTF solving) and fifteen runtime plugins, managed from a settings page with one-click deploy, install, update and uninstall.
- [toby-bridges/api-relay-audit](https://github.com/toby-bridges/api-relay-audit) - Runs local security audits of AI API relays and LLM proxies from DeepSeek Harness, producing Markdown reports for prompt injection, model substitution signals, tool-call rewriting, error leakage, stream integrity, and profile-gated Web3 risks.

### Remote & Mobile

- [zhu1090093659/dsh-web#packages/dsh-ssh](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-ssh) - SSH ops panel for DSH: web terminal, SFTP transfer with progress, local port forwarding, and one-command cluster execution across hosts; agents share the same host config.
- [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) - Aggregated IM gateway for DeepSeek Harness: drive agents from WeChat, Feishu, Telegram, Discord, QQ, WhatsApp and 20+ chat platforms with unified sessions, remote approvals and interactive questions. By default, anyone who can message a connected bot can drive the agent; configure allowedUserIds to restrict access.

### Plugin Markets & Managers

- [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) - Native skin marketplace and lifecycle manager that discovers community skins, displays previews and compatibility status, and provides verified one-click or manual installation paths.
- [zhu1090093659/dsh-web#packages/dsh-plugin-manager](https://github.com/zhu1090093659/dsh-web/tree/main/packages/dsh-plugin-manager) - Plugin manager tab in DSH Settings → Plugins: install from npm or git with progress, enable/disable switches effective at next startup, conflict reconciliation with undo, and one-click hand-off to a fix session.

### Just for Fun

- [a86582751/dsh-nexttavern](https://github.com/a86582751/dsh-nexttavern) - Roleplay workspace for DeepSeek Harness: import SillyTavern/TauriTavern character cards or author one from scratch through an interactive flow; turn a long TXT novel into a playable card with either an intensive or a coarse reading pass; the main agent consults worldbooks on demand, and prose is read in a dedicated tavern reader tab; explore multiple worldlines inside one conversation (regenerate, edit-and-send, explicit clone); scoped style presets with 16 built-in styles, a character agent cluster, a standalone decision card, and card or novel export; long stories hold together through a frozen settings prefix, a hard-cut context window, traceable director notes and keyword/semantic/hybrid recall, with embeddings either online or fully local. Targets Harness 0.1.2-alpha.3 and applies its documented compatibility patches.
- [chen731215-dev/dsh-tavern-v2](https://github.com/chen731215-dev/dsh-tavern-v2) - Tavern management panel for DeepSeek Harness: character cards, worldbooks and presets with per-session isolation, memory summaries, a character relationship web, one-click plot options and an NSFW mode. The full experience also needs the companion plugins dsh-muv-engine and dsh-muv-table, which render the status bar, the plot options and the variable tables.
- [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) - A Remielle(ZZZ) desktop pet for the dsh web GUI that switches animated sticker moods with the harness work state.
- [PC2005-cloud/dsh-pet#dsh-pet](https://github.com/PC2005-cloud/dsh-pet/tree/main/dsh-pet) - Desktop pet for the DSH Web UI with 25 transparent animations, screen wandering, click reactions and drag, plus a reproducible asset-generation pipeline.
- [vlln/whale-girl](https://github.com/vlln/whale-girl) - Desktop pet (QQ-pet style): floats in the corner, draggable, feedable, playable.
- [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) - Chat meme stickers: text-only send, mood auto-send, QQ/WeChat-style picker, auto-learn, custom packs.
<!-- END PLUGINS -->

## How to submit

Add one YAML file under `data/plugins/`, then open a pull request. Five keys, nothing else — the field
table, the review flow and the rejected-content list are in [contributing.md](contributing.md).

```yaml
# data/plugins/<owner>__<repo>.yml        monorepo subpackage: <owner>__<repo>--<subpath>.yml
url: https://github.com/meyaomiao/dsh-server-deck
name: meyaomiao/dsh-server-deck
category: remote
description:
  en: Server dashboard: per-host status, CPU, memory, disk and latency.
  zh: 服务器仪表盘：每台主机的状态、CPU、内存、磁盘与延迟。
```

CI checks the fields, the file name and the repository binding. Once merged, this README and the site
regenerate themselves.

## Disclaimer

A community-maintained index. Plugins are written and maintained by their own authors; a listing is not
an endorsement, and we make no claim about any plugin's security, quality or maintenance status.
Installing a plugin runs third-party code on your machine — review the source and proceed at your own
risk. This project is not affiliated with DeepSeek.

Issues here are for **the list and the site**. Problems with `dsh` itself belong in
[deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/issues); a plugin's bugs belong in that
plugin's own repository; and **a problem with the market UI you are looking at belongs in that client's
own repository** (for DSHBox, [WSK-build/DSHBox](https://github.com/WSK-build/DSHBox/issues)) — this
repository ships no client. Authors who would rather not be listed can ask and we take the entry down.

## Credits

This repository is a **re-identification of [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)**:
we take that project's `scripts/`, `site/` templates, workflows and package manifests as-is; besides
swapping the repository identity for this project's, **the listed entries and all probe data are our own
as well**. Details, file by file, in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); its own entries and probe data are **not** used.

Catalog data, scripts and docs are published under **CC0-1.0** — see [LICENSE](LICENSE). Contributing
means agreeing to the same dedication.
