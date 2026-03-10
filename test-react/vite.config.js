import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Increase file watcher limits for large number of components
    watch: {
      // Use polling with a longer interval to reduce file handle usage
      usePolling: false,
    },
  },
  optimizeDeps: {
    // Don't try to pre-bundle the component files
    exclude: ['./src/components/*'],
  },
})
