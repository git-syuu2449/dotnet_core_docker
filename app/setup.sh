#!/bin/bash

echo "NPM install 開始"
npm install

echo "必要な npm パッケージの追加（開発依存）"
npm install -D \
  typescript \
  @types/node \
  tailwindcss@3.4.1 \
  @tailwindcss/forms \
  postcss \
  autoprefixer \
  vue \
  vite \
  @vitejs/plugin-vue \
  axios

echo "必要な npm パッケージの追加"
npm install \
  vue

if [ ! -f tailwind.config.js ]; then
  echo "Tailwind 初期設定"
  npx tailwindcss init -p
fi

echo "ESLintに必要なパッケージをインストール"

npm install -D \
  eslint@9 \
  @eslint/js \
  eslint-plugin-vue \
  vue-eslint-parser \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  typescript

echo "セットアップ完了"
