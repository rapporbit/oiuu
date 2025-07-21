import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      // 添加常用语言
      langs: [
        'javascript',
        'typescript', 
        'jsx',
        'tsx',
        'bash',
        'json',
        'css',
        'scss',
        'yaml',
        'markdown',
        'dockerfile',
        'python',
        'go',
        'sql',
        'rust',
        'java'
      ],
      // 禁用默认背景色，让我们自定义
      defaultColor: false,
    }
  }
});
