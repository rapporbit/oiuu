package main

import (
	"embed"
	"fmt"
	"io/fs"
)

//go:embed web/dist/**
var webFS embed.FS

func main() {
	fmt.Println("=== 检查 embed.FS 中的文件 ===")

	// 检查根目录
	entries, err := webFS.ReadDir("web/dist")
	if err != nil {
		fmt.Printf("Error reading web/dist: %v\n", err)
		return
	}

	fmt.Println("\nweb/dist 目录内容:")
	for _, entry := range entries {
		fmt.Printf("  %s (dir: %v)\n", entry.Name(), entry.IsDir())
	}

	// 检查 _astro 目录
	astroEntries, err := webFS.ReadDir("web/dist/_astro")
	if err != nil {
		fmt.Printf("Error reading web/dist/_astro: %v\n", err)
		return
	}

	fmt.Println("\nweb/dist/_astro 目录内容:")
	for _, entry := range astroEntries {
		fmt.Printf("  %s (dir: %v)\n", entry.Name(), entry.IsDir())
	}

	// 特别检查目标 CSS 文件
	targetCSS := "web/dist/_astro/_slug_.DvP3r460.css"
	if _, err := webFS.Open(targetCSS); err != nil {
		fmt.Printf("\n❌ 目标文件 %s 不存在: %v\n", targetCSS, err)
	} else {
		fmt.Printf("\n✅ 目标文件 %s 存在\n", targetCSS)
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
}
