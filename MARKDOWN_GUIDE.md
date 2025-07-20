# Markdown 博客使用指南

## 🎯 概述

现在你的博客已经支持 Markdown 格式的文章了！你可以使用 Markdown 语法来编写博客文章，系统会自动将其转换为美观的网页。

## ✨ 新增功能

### 🎨 增强的渲染效果
- **代码高亮** - 支持多种编程语言的语法高亮
- **美观的样式** - 优化的标题、列表、表格等样式
- **响应式设计** - 完美适配各种设备
- **暗色主题** - 支持明暗主题切换
- **动画效果** - 平滑的交互动画

### 📝 支持的编程语言
- JavaScript, TypeScript
- JSX, TSX
- Python, Go
- CSS, HTML
- JSON, YAML
- SQL, Docker
- Git, Markdown
- Bash, Shell

## 📁 文件结构

```
web/src/content/blog/
├── first-post.md          # 第一篇博客文章
├── learning-notes.md      # 第二篇博客文章
└── your-article.md        # 你的新文章
```

## ✍️ 如何添加新的 Markdown 博客文章

### 1. 创建 Markdown 文件

在 `web/src/content/blog/` 目录下创建新的 `.md` 文件：

```bash
# 进入博客文章目录
cd web/src/content/blog

# 创建新文章
touch my-new-article.md
```

### 2. 编写文章内容

每个 Markdown 文件需要包含以下结构：

```markdown
---
title: "文章标题"
description: "文章简短描述"
pubDate: "2024-01-20"
tags: ["标签1", "标签2"]
---

# 文章标题

这里是你的文章内容...

## 二级标题

### 三级标题

- 列表项 1
- 列表项 2

1. 有序列表 1
2. 有序列表 2

**粗体文字** 和 *斜体文字*

`行内代码`

```javascript
// 代码块
function hello() {
  console.log('Hello World!');
}
```

> 这是一段引用文字

[链接文字](https://example.com)

![图片描述](https://example.com/image.jpg)
```

### 3. 文章元数据说明

#### Frontmatter 字段

- **title** (必需): 文章标题
- **description** (必需): 文章描述，会显示在文章列表中
- **pubDate** (必需): 发布日期，格式：`YYYY-MM-DD`
- **tags** (可选): 文章标签数组

## 🎨 Markdown 语法支持

### 基础语法

#### 标题
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

#### 文本格式
```markdown
**粗体文字**
*斜体文字*
~~删除线~~
`行内代码`
```

#### 列表
```markdown
# 无序列表
- 项目 1
- 项目 2
  - 子项目 2.1
  - 子项目 2.2

# 有序列表
1. 第一项
2. 第二项
3. 第三项

# 任务列表
- [x] 已完成任务
- [ ] 未完成任务
- [ ] 另一个任务
```

#### 链接和图片
```markdown
[链接文字](https://example.com)
![图片描述](https://example.com/image.jpg)
```

#### 引用
```markdown
> 这是一段引用文字
> 
> 可以包含多行
```

#### 代码块
```markdown
```javascript
function hello() {
  console.log('Hello World!');
}
```

```typescript
interface User {
  name: string;
  age: number;
}
```

```bash
npm install package-name
```

```json
{
  "name": "my-project",
  "version": "1.0.0"
}
```

```css
.container {
  padding: 20px;
  background: #f0f0f0;
}
```
```

#### 表格
```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

#### 分割线
```markdown
---
```

### 高级语法

#### 脚注
```markdown
这里是一段文字[^1]。

[^1]: 这是脚注内容。
```

#### 数学公式（如果支持）
```markdown
行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 🔧 文章管理

### 文章排序

文章会按照 `pubDate` 字段自动排序，最新的文章会显示在前面。

### 标签管理

使用 `tags` 字段为文章添加标签，标签会显示在文章列表和文章页面中。

### 文章链接

文章的 URL 会根据文件名自动生成：
- 文件名：`my-article.md`
- URL：`/blog/my-article`

## 📝 最佳实践

### 1. 文件命名
- 使用小写字母和连字符
- 避免使用空格和特殊字符
- 使用描述性的文件名

```bash
# 好的命名
my-first-blog-post.md
react-hooks-guide.md
typescript-tips.md

# 避免的命名
My First Blog Post.md
react_hooks_guide.md
typescript-tips!.md
```

### 2. 内容组织
- 使用清晰的标题结构
- 保持段落简洁
- 适当使用列表和代码块
- 添加相关图片和链接

### 3. 元数据
- 写有吸引力的标题
- 提供准确的描述
- 选择合适的标签
- 设置正确的发布日期

### 4. 代码展示
- 使用正确的语言标识
- 保持代码简洁
- 添加必要的注释
- 使用语法高亮

## 🚀 示例文章

### 技术文章模板

```markdown
---
title: "如何使用 React Hooks"
description: "详细介绍 React Hooks 的使用方法和最佳实践"
pubDate: "2024-01-20"
tags: ["React", "JavaScript", "前端"]
---

# 如何使用 React Hooks

React Hooks 是 React 16.8 引入的新特性，它让我们可以在函数组件中使用状态和其他 React 特性。

## 为什么使用 Hooks？

Hooks 解决了类组件的几个问题：
- 组件之间难以复用状态逻辑
- 复杂组件变得难以理解
- 类组件中的 this 指向问题

## 常用的 Hooks

### useState

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}
```

### useEffect

```javascript
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return user ? <div>{user.name}</div> : <div>加载中...</div>;
}
```

## 总结

Hooks 让 React 组件变得更加简洁和易于理解。通过合理使用 Hooks，我们可以写出更好的 React 应用。

---

*最后更新：2024-01-20*
```

## 🎯 下一步

1. **创建你的第一篇文章** - 按照上面的模板创建新文章
2. **自定义样式** - 根据需要调整文章样式
3. **添加更多功能** - 如评论系统、搜索功能等
4. **部署上线** - 将你的博客部署到线上

## 💡 提示

- 所有文本内容都可以在 `config.ts` 中修改
- 图片文件放在 `web/public/` 目录
- 样式修改在 `web/src/styles/globals.css`
- 主题配置在 `web/tailwind.config.mjs`
- 工作空间页面可以展示你的工具和推荐
- 博客文章支持 Markdown 样式的 HTML 内容
- 代码高亮支持多种编程语言

祝你写作愉快！🎉 