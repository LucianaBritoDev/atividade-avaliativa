import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/intranet/', // Define a base para o diretório
  plugins: [react()],
})
