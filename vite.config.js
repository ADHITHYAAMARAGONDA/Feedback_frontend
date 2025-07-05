import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // optional alias
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    // This helps during local dev
    historyApiFallback: true,
  },
})
