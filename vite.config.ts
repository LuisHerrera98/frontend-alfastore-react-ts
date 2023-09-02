import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  plugins: [react()],
  build: {
    outDir: '../front-alfastore/dist', // Ruta deseada para la carpeta dist
  },
})
