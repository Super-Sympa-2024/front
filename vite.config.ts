import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  resolve: {
    alias: {
      '@services': '/src/services',
      '@models': '/src/models',
      '@components': '/src/components',
      '@assets': '/src/assets'
    }
  }
})
