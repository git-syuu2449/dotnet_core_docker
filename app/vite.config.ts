import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import fs from 'fs'
import path from 'path'

// 再帰的にエントリポイントを取得
function getEntrypoints(dir) {
  const entries = {}
  const walk = (currentPath) => {
    fs.readdirSync(currentPath).forEach(file => {
      const fullPath = path.join(currentPath, file)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        walk(fullPath)
      } else if (/\.(js|css|ts|tsx)$/.test(file)) {
        const relativePath = path.relative(dir, fullPath).replace(/\\/g, '/')
        entries[relativePath.replace(/\.(js|css)$/, '')] = fullPath
      }
    })
  }
  walk(dir)
  return entries
}

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    cors: true,
    hmr: {
      host: '0.0.0.0',
      port: 5173,
    }
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@@': path.resolve(__dirname, 'frontend/js'),
      '@@components': path.resolve(__dirname, 'frontend/js/components'),
      '@@css': path.resolve(__dirname, 'frontend/css'),
      '@@images': path.resolve(__dirname, 'frontend/images'),
    },
  },
  plugins: [
    vue(),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: getEntrypoints(path.resolve(__dirname, 'frontend')),
      output: {
        dir: 'wwwroot/assets',  // ← 出力先（例：.NETの静的ファイル配信ディレクトリ）
        assetFileNames: '[name].[hash].[ext]',
        entryFileNames: '[name].[hash].js',
      }
    },
    outDir: 'wwwroot/assets',  // 本体の出力先
    emptyOutDir: true,
  }
})
