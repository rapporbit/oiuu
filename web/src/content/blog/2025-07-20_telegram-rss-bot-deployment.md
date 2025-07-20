---
title: "Telegram RSS Bot 部署指南"
description: "详细说明如何部署 Telegram RSS Bot，包括 Docker 配置和运行步骤"
pubDate: "2025-07-20"
tags: ["Telegram", "RSS", "Bot", "Docker", "部署"]
---

# Telegram RSS Bot 部署指南

本文详细介绍如何部署 Telegram RSS Bot，包括环境准备、配置文件和 Docker 部署步骤。

## 环境准备

首先进入项目目录：

```bash
cd ~/my-tgrss-bot
```

## 下载和安装

### 1. 下载 Bot 程序

```bash
wget https://github.com/IonRh/TGBot_RSS/releases/download/v1.0.1/TGBot-linux-amd64.tar.gz
```

### 2. 解压文件

```bash
tar -zxvf TGBot-linux-amd64.tar.gz
```

## 配置文件

### 创建配置文件

使用 vim 编辑器创建配置文件：

```bash
vim config.json
```

### 配置文件内容

```json
{
  "BotToken": "8169389531:AAH39ClvAEo8iKLh0xnvPDAR4tceNku-D_Q",
  "ADMINIDS": 1174097596,
  "Cycletime": 1,
  "Debug": false,
  "ProxyURL": "",
  "Pushinfo": ""
}
```

**配置说明：**
- `BotToken`: Telegram Bot 的 API Token
- `ADMINIDS`: 管理员用户 ID
- `Cycletime`: 检查 RSS 的时间间隔（分钟）
- `Debug`: 是否开启调试模式
- `ProxyURL`: 代理服务器地址（可选）
- `Pushinfo`: 推送信息配置

## Docker 部署

### 创建 Dockerfile

```bash
vim Dockerfile
```

### Dockerfile 内容

```dockerfile
# 使用一个同样小巧但基于 glibc 的 debian: 12-slim 镜像
FROM debian:12-slim

# 新增：更新包列表并安装 ca-certificates 包以解决 x509 证书问题
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# 在容器内设置工作目录为 /app
WORKDIR /app

# 将你的可执行文件和配置文件从主机复制到容器的 /app 目录
COPY TGBotRSS .
COPY config.json .

# 赋予可执行文件运行权限
RUN chmod +x ./TGBotRSS

# 定义容器启动时要执行的命令
CMD ["./TGBot_RSS"]
```

### 构建 Docker 镜像

```bash
docker build -t tgrssbot .
```

### 运行容器

```bash
docker run -d \
  --name my-tgrss-bot \
  -v "$(pwd)/config.json:/app/config.json" \
  --restart always \
  tgrssbot
```

**运行参数说明：**
- `-d`: 后台运行
- `--name my-tgrss-bot`: 容器名称
- `-v "$(pwd)/config.json:/app/config.json"`: 挂载配置文件
- `--restart always`: 容器自动重启
- `tgrssbot`: 镜像名称

## 验证部署

### 检查容器状态

```bash
docker ps
```

### 查看容器日志

```bash
docker logs my-tgrss-bot
```

### 进入容器调试

```bash
docker exec -it my-tgrss-bot /bin/bash
```

## 常见问题

### 1. 证书问题
如果遇到 x509 证书问题，确保 Dockerfile 中包含了 `ca-certificates` 包的安装。

### 2. 权限问题
确保可执行文件有正确的运行权限：
```bash
chmod +x ./TGBotRSS
```

### 3. 配置文件路径
确保配置文件路径正确，并且容器内外的路径映射正确。

## 总结

通过以上步骤，你可以成功部署 Telegram RSS Bot。Bot 将自动检查 RSS 源并推送更新到指定的 Telegram 频道或用户。

---

*最后更新：2025-07-20*


