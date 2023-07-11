import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@domain', replacement: path.resolve(__dirname, 'src/domain') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
    ],
  },
  plugins: [react()],
})