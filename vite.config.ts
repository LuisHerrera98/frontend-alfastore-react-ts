import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  plugins: [
    react()
  ],
  build: {
    outDir: '../front-alfastore/dist', // Ruta deseada para la carpeta dist
  },
})
