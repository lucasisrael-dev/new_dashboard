import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
//export default defineConfig({
//  plugins: [vue()],
//})

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Necessário para expor o servidor fora do container
    port: 5173,
    watch: {
      usePolling: true, // Útil para detectar mudanças em sistemas de arquivos montados (Windows/Mac)
    },
  },
})

