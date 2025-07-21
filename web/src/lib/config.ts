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
      name: "Jake's Blog",
      desc: "Astro Build Blog",
      link: "https://github.com/rapporbit/oiuu",
      icon: "Sparkles",
    },
    // 添加更多项目...
    {
      name: "Jake's Blog",
      desc: "Astro Build Blog",
      link: "https://github.com/rapporbit/oiuu",
      icon: "Sparkles",
    },
  ],
  links: [
    {
      name: "Uptime",
      link: "https://nezha.oiuu.de",
      desc: "Nezha探针",
      icon: "Activity",
    },
    // 添加更多链接...
    {
      name: "WorkSpace",
      link: "/workspace",
      desc: "工欲善其事，必先利其器",
      icon: "PocketKnife",
    },
  ],
  about: {
    mail: "cmFwcG9yYml0MkBnbWFpbC5jb20=", // Base64 编码的邮箱
    me: "一个喜欢折腾的人",
    backend: ["Golang", "Python", "Docker", "Kubernetes", "Operator"],
    frontend: ["React", "Next.js", "TypeScript", "Astro"],
  },
}
