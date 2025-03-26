import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/tienphung/',  // Đảm bảo đúng tên repo GitHub Pages
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    target: 'esnext', // ✅ Thêm dòng này để tránh lỗi module specifier
  },
});

