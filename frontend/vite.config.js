import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'crypto'

// 안전하게 globalThis.crypto 설정 (Node 환경 대비)
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = webcrypto
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://poptory-backend.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
