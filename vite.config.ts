import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@games': path.resolve(__dirname, 'src/games'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          games: ['./src/games'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});