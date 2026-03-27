# ScholarFlow

ScholarFlow 是一个面向研究新手的研究方向探索与前沿追踪平台 MVP，帮助本科生、硕士低年级学生以及刚进入科研的人更快完成从“我不知道该学什么”到“我知道该先读什么、该追什么趋势、该怎么开始做”的过渡。

它不是单纯的论文搜索工具，而是一个更完整的研究入门工作台，覆盖：

- 方向发现
- 主题理解
- 入门阅读路径
- 前沿趋势追踪
- 个人笔记与研究问题管理
- 报告草稿生成

## 产品定位

ScholarFlow 的核心目标是帮助初学者回答这几个关键问题：

- 这是什么方向？
- 为什么这个方向重要？
- 我应该先读什么？
- 这个方向现在的 frontier 在哪里？
- 我如何把阅读转成自己的研究问题与输出？

整体设计风格偏学术、克制、清晰、可靠，不走通用 SaaS 落地页路线。

## 界面预览

### 1. 首页：先帮用户建立方向感

首页先解决“为什么要用它”和“我下一步该去哪里”的问题，把 featured directions、跨学科主题、趋势和学习路径放在同一条用户认知链路上。

![ScholarFlow 首页](./docs/screenshots/home.png)

### 2. Explore：筛选研究方向，而不是直接淹没在论文里

探索页允许按关键词、学科、成熟度来筛选主题，让新手先看方向卡片中的难度、动量、关键词和说明，再决定是否进入主题详情。

![ScholarFlow Explore 页面](./docs/screenshots/explore.png)

### 3. Topic Detail：把“这个方向是什么”讲清楚

主题详情页围绕一个 topic 给出 overview、意义、核心问题、子方向、代表论文、foundation vs recent 的阅读分层，以及 beginner learning path。

![ScholarFlow Topic 详情页](./docs/screenshots/topic-graphrag.png)

### 4. Trends：看 frontier，不丢上下文

趋势页展示本周热点、增长关键词和 frontier summary，但不会只给热度，还会保留学科和信号解释，避免“看趋势但不知道为什么”的问题。

![ScholarFlow Trends 页面](./docs/screenshots/trends.png)

### 5. Workspace：把阅读转成自己的研究资产

工作区用于沉淀收藏主题、收藏论文、笔记、阅读进度、研究问题和任务清单，让用户从“看过”过渡到“我已经开始形成判断”。

![ScholarFlow Workspace 页面](./docs/screenshots/workspace.png)

### 6. Report Builder：把主题信息快速整理成输出

报告生成页可以基于选定主题自动整理 Markdown 草稿，适合快速生成组会汇报、入门综述草稿或研究 onboarding memo。

![ScholarFlow Report Builder 页面](./docs/screenshots/report-builder.png)

## 用户流程

如果用一句话概括 ScholarFlow 在做什么，可以理解为下面这条链路：

1. 在首页或 Explore 里发现一个值得进入的方向
2. 在 Topic Detail 里理解这个方向为什么重要、该先读什么、现在 frontier 在哪里
3. 把主题和论文保存到 Workspace
4. 在 Workspace 里持续记录笔记、问题和任务
5. 最后在 Report Builder 中把已有信息整理成结构化输出

也就是说，ScholarFlow 不是只负责“找到内容”，而是负责把新手从好奇心带到可执行的研究起点。

## MVP 功能

当前版本包含以下页面：

- `/` 首页：产品价值、研究方向推荐、跨学科建议、入门 onboarding、趋势与学习路径入口
- `/explore` 探索页：按关键词、学科、成熟度筛选研究主题
- `/topic/[slug]` 主题详情页：主题介绍、意义、核心问题、子方向、代表论文、学习路径、关联方向
- `/trends` 趋势页：本周热门主题、增长关键词、前沿信号摘要
- `/paths` 学习路径页：7 天、14 天、30 天与从 beginner 到 frontier 的结构化路线
- `/workspace` 工作区：收藏主题、收藏论文、笔记、阅读进度、研究问题、任务清单
- `/report-builder` 报告生成页：根据选定主题生成结构化 Markdown 报告草稿，并支持复制/导出

## 技术栈

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- 基于 shadcn/ui 风格的可复用 UI primitives
- 本地 typed mock data
- localStorage 模拟个人 workspace 持久化

## 本地运行

```bash
npm install
npm run dev
```

默认地址：

```bash
http://localhost:3000
```

生产构建验证：

```bash
npm run lint
npm run build
```

## 截图更新

README 中的界面截图来自本地运行后的真实页面。重新生成截图的方式：

1. 启动本地开发服务器
2. 执行截图脚本

```bash
npm run dev
npm run screenshots
```

生成后的图片会输出到 `docs/screenshots/`。

## 项目结构

```text
src/
  app/
    explore/
    paths/
    report-builder/
    topic/[slug]/
    trends/
    workspace/
    globals.css
    layout.tsx
    loading.tsx
    not-found.tsx
    page.tsx
  components/
    layout/
    providers/
    report/
    topic/
    ui/
  data/
    mock-data.ts
    types.ts
  hooks/
    use-local-storage.ts
  lib/
    report.ts
    utils.ts
scripts/
  capture-screenshots.mjs
docs/
  screenshots/
```

## 数据设计

项目内置了完整 TypeScript 类型，便于未来接入真实 API：

- `Topic`
- `Subtopic`
- `Paper`
- `LearningPath`
- `Trend`
- `WorkspaceItem`
- `Note`
- `ResearchQuestion`
- `ReportSection`

Mock 数据覆盖多个学科与交叉方向，包括：

- Large Language Models
- GraphRAG
- Multi-Agent Systems
- Medical AI
- Materials Informatics
- Bioinformatics
- Robotics
- Energy Systems
- Nuclear Safety AI
- Education Technology

## 设计与交互说明

这个 MVP 在设计上强调以下几点：

- 对初学者友好，不默认用户已经具备领域背景
- 信息分层清晰，先给方向感，再给阅读顺序，再给趋势与行动建议
- 页面密度高但不压迫，保持学术感与可读性
- Workspace 和 Report Builder 让“读论文”自然过渡到“形成输出”

## 后续扩展建议

这个代码库已经按可扩展方式组织，后续可以直接接入：

- arXiv / Semantic Scholar / OpenAlex 等真实论文数据源
- topic trend 计算逻辑
- 用户登录与云端同步
- 真实笔记系统与项目管理
- 学习路径自定义生成
- 文献综述自动草稿增强

## 当前说明

- 当前趋势、主题与论文数据均为本地 mock 数据
- Workspace 使用浏览器本地存储，不依赖后端
- 页面已通过 `npm run lint` 与 `npm run build`

## 开源方向

ScholarFlow 适合作为一个研究导航类产品的开源 MVP 起点，也适合作为后续接 AI 检索、知识图谱、个性化研究助手的基础前端。
