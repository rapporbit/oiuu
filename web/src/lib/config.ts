import type { icons } from "lucide-react"

interface Item {
  name: string
  desc: string
  link: string
  icon: keyof typeof icons
}

interface Config {
  github: string
  projects: Item[]
  links: Item[]
  about: { mail: string; me: string; frontend: string[]; backend: string[] }
}

export const config: Config = {
  github: "https://github.com/rapporbit",
  projects: [
    {
      name: "项目名称",
      desc: "项目描述",
      link: "https://your-project.com",
      icon: "Sparkles",
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
  about: {
    mail: "cmFwcG9yYml0MkBnbWFpbC5jb20=", // Base64 编码的邮箱
    me: "一个喜欢折腾的人",
    backend: ["Golang", "Python", "Docker", "Kubernetes", "Operator"],
    frontend: ["React", "Next.js", "TypeScript", "Astro"],
  },
}
