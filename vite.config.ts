import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['gsap', 'swiper'],
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'yup'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild', // Using esbuild for faster builds
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'gsap'],
  },
  // Support client-side routing during preview
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
})
