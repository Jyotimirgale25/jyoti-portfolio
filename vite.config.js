import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Make sure build output goes to dist
  build: {
    outDir: 'dist'
  }
})