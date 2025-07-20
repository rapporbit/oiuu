---
title: "组件展示 - 代码块和文本块优化效果"
description: "展示优化后的代码块和文本块组件的各种效果和功能"
pubDate: "2025-07-20"
tags: ["组件", "展示", "代码块", "文本块", "优化"]
---

# 组件展示 - 代码块和文本块优化效果

本文展示了优化后的代码块和文本块组件的各种效果和功能。

## 代码块展示

### 1. Bash 命令

```bash
# 这是一个 bash 命令示例
echo "Hello, World!"
ls -la
cd /path/to/directory
```

### 2. JSON 配置

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### 3. Dockerfile

```dockerfile
# 使用官方 Node.js 镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
```

### 4. TypeScript 代码

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [];

  async getUser(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: Date.now(),
      ...userData
    };
    this.users.push(newUser);
    return newUser;
  }
}

export default UserService;
```

### 5. CSS 样式

```css
/* 现代化的 CSS 样式 */
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.button {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```

## 文本块展示

### 信息提示

这是一个信息提示块，用于显示重要的信息或说明。

### 警告提示

这是一个警告提示块，用于提醒用户注意某些事项。

### 成功提示

这是一个成功提示块，用于显示操作成功的信息。

### 错误提示

这是一个错误提示块，用于显示错误信息或问题。

### 笔记提示

这是一个笔记提示块，用于显示额外的说明或备注。

## 内联代码展示

在段落中使用 `inline code` 来突出显示特定的代码片段。

## 表格展示

| 功能 | 描述 | 状态 |
|------|------|------|
| 代码高亮 | 支持多种编程语言的语法高亮 | ✅ 已完成 |
| 复制功能 | 一键复制代码到剪贴板 | ✅ 已完成 |
| 主题适配 | 自动适配明暗主题 | ✅ 已完成 |
| 响应式设计 | 在移动设备上完美显示 | ✅ 已完成 |
| 动画效果 | 流畅的悬停和交互动画 | ✅ 已完成 |

## 列表展示

### 无序列表

- 第一项
- 第二项
- 第三项
  - 嵌套项 1
  - 嵌套项 2

### 有序列表

1. 第一步
2. 第二步
3. 第三步
   1. 子步骤 1
   2. 子步骤 2

## 引用展示

> 这是一个引用块，用于引用他人的话或重要的内容。
> 
> 可以包含多个段落，并且支持 **粗体** 和 *斜体* 格式。

## 总结

通过以上展示，你可以看到优化后的代码块和文本块组件具有以下特点：

- **完美的主题适配** - 在明暗主题下都有出色的显示效果
- **丰富的交互功能** - 复制按钮、悬停效果等
- **优雅的动画** - 流畅的过渡和微交互
- **响应式设计** - 在各种设备上都能完美显示
- **丰富的样式** - 支持多种类型的文本块和代码块

这些优化让博客的阅读体验更加愉悦和专业。

---

*最后更新：2025-07-20* 