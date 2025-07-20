# 个人博客项目

一个基于 Astro + React + TypeScript + Tailwind CSS 构建的现代化个人博客网站。

## ✨ 特性

- 🎨 **现代化设计** - 简约优雅的界面设计
- 🌙 **暗色主题** - 支持明暗主题切换
- 📱 **响应式布局** - 完美适配各种设备
- ⚡ **高性能** - 基于 Astro 的静态站点生成
- 🎭 **动画效果** - 流畅的交互动画
- 🔧 **易于定制** - 模块化的组件设计
- 🚀 **快速部署** - 支持 Docker 容器化部署

## 🛠️ 技术栈

### 前端
- **Astro** - 现代静态站点生成器
- **React** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Lucide React** - 精美的图标库
- **Framer Motion** - 动画库

### 后端
- **Go (Golang)** - 高性能编程语言
- **Echo** - 轻量级 Web 框架

### 部署
- **Docker** - 容器化部署
- **Alpine Linux** - 轻量级基础镜像

## 🚀 快速开始

### 方法一：使用启动脚本（推荐）

```bash
# 运行快速启动脚本
./setup.sh
```

### 方法二：手动启动

```bash
# 进入前端目录
cd web

# 安装依赖
npm install  # 或 bun install

# 启动开发服务器
npm run dev  # 或 bun run dev
```

## 📝 定制指南

详细的定制说明请查看 [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

### 主要配置文件

1. **个人信息** - `web/src/lib/config.ts`
2. **网站元数据** - `web/src/lib/meta.ts`
3. **页面标题** - `web/src/components/Header.astro`
4. **头像图片** - `web/public/icon.webp`

## 🏗️ 项目结构

```
sunls24/
├── web/                    # 前端项目
│   ├── src/
│   │   ├── pages/         # 页面文件
│   │   ├── components/    # 组件
│   │   ├── layouts/       # 布局模板
│   │   ├── lib/          # 工具函数和配置
│   │   └── styles/       # 样式文件
│   ├── public/           # 静态资源
│   └── package.json      # 前端依赖
├── main.go               # Go 服务器
├── Dockerfile            # Docker 配置
├── setup.sh              # 快速启动脚本
└── CUSTOMIZATION_GUIDE.md # 定制指南
```

## 🎯 页面功能

### 首页
- 个人项目展示
- 重要链接
- 个人简介
- 技术栈展示

### 工作空间页面
- 软件推荐
- Chrome 插件
- VSCode 插件
- macOS 实用命令

## 🚀 部署

### Docker 部署

```bash
# 构建镜像
docker build -t blog .

# 运行容器
docker run -p 3000:3000 blog
```

### 静态托管

```bash
# 构建静态文件
cd web
npm run build

# 部署 dist/ 目录到任何静态托管服务
```

 