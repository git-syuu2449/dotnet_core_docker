import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  
    content: [
    './frontend/js/**/*.{js,ts,jsx,tsx,vue}',  // Viteで読み込むフロントエンドコード
    './frontend/css/**/*.{css,sass}',          // Viteで読み込むフロントエンドコード
    './Views/**/*.{cshtml}',                   // ViewComponent
  ],
  
  theme: {
    extend: {
        fontFamily: {
            // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        },
    },
  },

  plugins: [forms],
}
