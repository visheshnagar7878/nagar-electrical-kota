import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Open the game by default during development
    open: '/game.html',
  },
  build: {
    rollupOptions: {
      input: {
        // Nagar Electrical site
        main: resolve(__dirname, 'index.html'),
        // Gappu Muni game
        game: resolve(__dirname, 'game.html'),
        // Gappu Muni landing page (for PhonePe & app store)
        'gappu-muni': resolve(__dirname, 'gappu-muni.html'),
      },
    },
  },
})
