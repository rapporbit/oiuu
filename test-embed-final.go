package main

import (
	"embed"
	"fmt"
	"io/fs"
)

//go:embed web/dist/**
var webFS embed.FS

func main() {
	fmt.Println("=== 检查最终 embed.FS 中的文件 ===")

	// 检查 assets 目录
	assetsEntries, err := webFS.ReadDir("web/dist/assets")
	if err != nil {
		fmt.Printf("Error reading web/dist/assets: %v\n", err)
		return
	}

	fmt.Println("\nweb/dist/assets 目录内容:")
	for _, entry := range assetsEntries {
		fmt.Printf("  %s (dir: %v)\n", entry.Name(), entry.IsDir())
	}

	// 检查所有 CSS 文件
	fmt.Println("\n所有 CSS 文件:")
	fs.WalkDir(webFS, "web/dist", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && len(path) > 4 && path[len(path)-4:] == ".css" {
			fmt.Printf("  %s\n", path)
		}
		return nil
	})

	// 检查 index.html 中引用的 CSS
	fmt.Println("\n检查 index.html 内容:")
	indexFile, err := webFS.Open("web/dist/index.html")
	if err != nil {
		fmt.Printf("Error opening index.html: %v\n", err)
		return
	}
	defer indexFile.Close()

	// 简单检查是否包含 assets 路径
	fmt.Println("✅ index.html 文件可以打开")
}
