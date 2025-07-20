# 博客定制指南

## 🎯 快速开始

恭喜！你已经成功清空了原作者的内容，现在可以开始定制属于你自己的博客了。

## 📝 需要修改的文件

### 1. 个人信息配置 (`web/src/lib/config.ts`)

这是最重要的配置文件，包含你的所有个人信息：

```typescript
export const config: Config = {
  github: "https://github.com/your-username", // 你的 GitHub 链接
  projects: [
    {
      name: "项目名称",
      desc: "项目描述",
      link: "https://your-project.com",
      icon: "Sparkles", // 使用 lucide-react 图标
    },
    // 添加更多项目...
  ],
  links: [
    {
      name: "链接名称",
      link: "https://your-link.com",
      desc: "链接描述",
      icon: "Activity",
    },
    // 添加更多链接...
  ],
  blogs: [
    {
      title: "博客文章标题",
      desc: "文章简短描述",
      link: "/blog/article-slug",
      date: "2024-01-15",
      tags: ["技术", "分享"]
    },
    // 添加更多博客文章...
  ],
  about: {
    mail: "your-email@example.com", // 邮箱地址
    me: "你的个人简介",
    backend: ["技术栈1", "技术栈2"], // 后端技术栈
    frontend: ["技术栈1", "技术栈2"], // 前端技术栈
  },
}
```

### 2. 网站元数据 (`web/src/lib/meta.ts`)

```typescript
export default {
  lang: "zh", // 语言设置
  title: "你的博客标题",
  description: "你的博客描述",
  appleWebApp: "你的应用名称",
  appleIcon: "/apple-icon.png",
}
```

### 3. 页面标题 (`web/src/components/Header.astro`)

修改第 15 行的标语：
```astro
<span class="text-xl font-medium sm:ml-6">你的标语</span>
```

### 4. 头像图片

替换 `web/public/icon.webp` 文件为你的头像。

### 5. 网站图标

替换以下文件：
- `web/public/favicon.ico` - 网站图标
- `web/public/apple-icon.png` - Apple 设备图标

### 6. 博客文章管理

#### 添加新博客文章
1. **更新配置文件** - 在 `config.blogs` 中添加文章信息
2. **创建文章页面** - 在 `web/src/pages/blog/` 创建 `.astro` 文件

```typescript
// 在 config.ts 中添加
{
  title: "新文章标题",
  desc: "文章描述",
  link: "/blog/new-article",
  date: "2024-01-20",
  tags: ["标签1", "标签2"]
}
```

```astro
<!-- 创建 web/src/pages/blog/new-article.astro -->
---
import Layout from "@/layouts/Layout.astro"
import { ArrowLeft } from "lucide-react"
---

<Layout title="新文章标题">
  <div class="max-w-4xl mx-auto">
    <!-- 返回按钮 -->
    <a href="/" class="...">
      <ArrowLeft size={16} />
      返回首页
    </a>

    <!-- 文章内容 -->
    <article class="prose prose-gray dark:prose-invert max-w-none">
      <!-- 你的文章内容 -->
    </article>
  </div>
</Layout>
```

#### 博客文章结构
- **标题** - 文章的主标题
- **描述** - 文章的简短描述
- **链接** - 文章的URL路径
- **日期** - 发布日期
- **标签** - 文章分类标签

### 7. 工作空间页面配置

#### 软件推荐 (`web/src/lib/software.ts`)
```typescript
export const software: Software[] = [
  {
    Name: "软件名称",
    Icon: "Package",
    Link: "https://software-website.com",
    Description: "软件描述",
  },
  // 添加更多软件...
]
```

#### Chrome 插件 (`web/src/lib/chrome.ts`)
```typescript
export const chrome: Software[] = [
  {
    Name: "插件名称",
    Icon: "Navigation",
    Link: "https://chromewebstore.google.com/detail/...",
    Description: "插件描述",
  },
  // 添加更多插件...
]
```

#### VSCode 插件 (`web/src/lib/vscode.ts`)
```typescript
export const vscode: Software[] = [
  {
    Name: "插件名称",
    Icon: "Plug",
    Link: "https://marketplace.visualstudio.com/items?itemName=...",
    Description: "插件描述",
  },
  // 添加更多插件...
]
```

#### macOS 命令 (`web/src/lib/mac.ts`)
```typescript
export const mac: Software[] = [
  {
    Name: "命令名称",
    Icon: "Command",
    Link: "https://command-docs.com",
    Description: "命令描述",
    Command: "actual command",
  },
  // 添加更多命令...
]
```

## 🎨 可用的图标

项目使用 `lucide-react` 图标库，你可以在 [Lucide Icons](https://lucide.dev/icons/) 查看所有可用图标。

常用图标示例：
- `Sparkles` - 星星
- `Mail` - 邮件
- `Github` - GitHub
- `Activity` - 活动
- `BrainCircuit` - 大脑
- `DraftingCompass` - 指南针
- `Package` - 包裹
- `Chrome` - 浏览器
- `RadioTower` - 广播塔
- `Navigation` - 导航
- `Plug` - 插件
- `Command` - 命令
- `Zap` - 闪电
- `SquareTerminal` - 终端
- `FilePenLine` - 文件编辑
- `CodeXml` - 代码
- `Binary` - 二进制
- `ChartPie` - 图表
- `Crop` - 裁剪
- `Waypoints` - 路径点
- `Eraser` - 橡皮擦
- `Rabbit` - 兔子
- `LaptopMinimalCheck` - 笔记本
- `PictureInPicture` - 画中画
- `ClipboardCopy` - 剪贴板
- `Calendar` - 日历
- `Tag` - 标签

## 📧 邮箱编码

如果你想要隐藏邮箱地址，可以使用 Base64 编码：

```javascript
// 在浏览器控制台中运行
btoa("your-email@example.com")
```

然后将结果复制到 `config.about.mail` 中。

## 🚀 运行项目

```bash
# 进入前端目录
cd web

# 安装依赖
npm install  # 或 bun install

# 启动开发服务器
npm run dev  # 或 bun run dev
```

## 🎯 下一步

1. **修改配置文件** - 更新个人信息
2. **替换头像** - 上传你的头像
3. **添加项目** - 展示你的作品
4. **添加博客文章** - 记录你的想法和心得
5. **自定义样式** - 调整颜色和布局
6. **配置工作空间** - 添加软件推荐和工具
7. **部署上线** - 使用 Docker 或静态托管

## 💡 提示

- 所有文本内容都可以在 `config.ts` 中修改
- 图片文件放在 `web/public/` 目录
- 样式修改在 `web/src/styles/globals.css`
- 主题配置在 `web/tailwind.config.mjs`
- 工作空间页面可以展示你的工具和推荐
- 博客文章支持 Markdown 样式的 HTML 内容

## 🔧 高级定制

### 添加新页面
1. 在 `web/src/pages/` 创建新的 `.astro` 文件
2. 使用 `Layout` 组件作为页面模板
3. 添加路由链接到 `config.links`

### 自定义组件
1. 在 `web/src/components/` 创建新组件
2. 支持 `.astro`、`.tsx`、`.jsx` 格式
3. 使用 TypeScript 获得更好的开发体验

### 样式定制
1. 修改 `web/src/styles/globals.css` 中的 CSS 变量
2. 调整 `web/tailwind.config.mjs` 中的主题配置
3. 添加自定义动画和效果

### 博客功能扩展
1. **添加评论系统** - 集成第三方评论服务
2. **添加搜索功能** - 实现文章搜索
3. **添加分类页面** - 按标签分类文章
4. **添加RSS订阅** - 生成RSS源
5. **添加阅读统计** - 统计文章阅读量

祝你定制愉快！🎉 