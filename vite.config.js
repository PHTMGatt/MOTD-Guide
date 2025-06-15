// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    // outDir: 'render-build',    // <— remove this line
    emptyOutDir: true,            // still helpful to clean dist/
    rollupOptions: {
      input: 'index.html'        // root-level HTML
    }
  }
})
