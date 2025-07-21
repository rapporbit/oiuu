import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // 修改文件名生成规则，避免 _slug_ 模式
          entryFileNames: 'assets/entry-[hash].js',
          chunkFileNames: 'assets/chunk-[hash].js',
          assetFileNames: (assetInfo) => {
            // 特殊处理 CSS 文件，避免 _slug_ 前缀
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return `assets/style-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          }
        }
      }
    }
  },
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
