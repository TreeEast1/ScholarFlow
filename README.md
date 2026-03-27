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
