/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import image from '@rollup/plugin-image'
import path from 'path'
import inject from '@rollup/plugin-inject'

export default defineConfig({
  input: 'src/index.js',
  output: {
    dir: 'assets',
    format: 'gif',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), image()],
  build: {
    rollupOptions: {
      plugins: [inject({ process: 'process' })],
    },
  },
})
