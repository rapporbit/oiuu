#!/bin/bash

echo "🚀 博客项目快速启动脚本"
echo "=========================="

# 检查是否在正确的目录
if [ ! -f "web/package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 进入前端目录
cd web

echo "📦 安装依赖..."
if command -v bun &> /dev/null; then
    echo "使用 Bun 安装依赖..."
    bun install
else
    echo "使用 npm 安装依赖..."
    npm install
fi

echo "✅ 依赖安装完成！"
echo ""
echo "🎯 下一步操作："
echo "1. 修改 web/src/lib/config.ts 中的个人信息"
echo "2. 替换 web/public/icon.webp 为你的头像"
echo "3. 运行 'npm run dev' 或 'bun run dev' 启动开发服务器"
echo ""
echo "📖 详细说明请查看 CUSTOMIZATION_GUIDE.md"
echo ""
echo "🚀 现在启动开发服务器..."

if command -v bun &> /dev/null; then
    bun run dev
else
    npm run dev
fi 