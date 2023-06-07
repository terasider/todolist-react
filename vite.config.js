import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    outDir: 'build', // Defina o nome da pasta de saída desejada aqui
  },
};