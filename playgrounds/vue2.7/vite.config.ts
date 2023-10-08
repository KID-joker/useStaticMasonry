import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
  ],
  resolve: {
    alias: {
      'vue-masonry-grid': resolve(__dirname, '../../src'),
    },
  },
})
