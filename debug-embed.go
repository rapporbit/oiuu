package main

import (
	"embed"
	"fmt"
	"io/fs"
)

//go:embed web/dist/_astro
var astroFS embed.FS

func main() {
	fmt.Println("=== 直接 embed _astro 目录 ===")

	fmt.Println("\n所有文件:")
	fs.WalkDir(astroFS, ".", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() {
			fmt.Printf("  %s\n", path)
		}
		return nil
	})
}
