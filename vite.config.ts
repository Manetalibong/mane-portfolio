import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Use base: '/' if deploying to username.github.io (user site repo).
export default defineConfig({
  base: '/mane-portfolio/',
  plugins: [react(), tailwindcss()],
})
