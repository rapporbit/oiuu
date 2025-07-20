export interface Software {
  Name: string
  Link: string
  Icon: string
  Description: string
  Strikethrough?: boolean
  Remark?: string
  Command?: string
}

export const software: Software[] = [
  {
    Name: "示例软件",
    Icon: "Package",
    Link: "https://example.com",
    Description: "软件描述",
  },
  // 添加更多软件推荐...
]
