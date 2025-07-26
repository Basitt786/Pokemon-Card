// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ONLY this default export should exist
export default defineConfig({
  plugins: [react()],
  base: '/Pokemon-Card/', // Must match your repo name exactly
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html'
    }
  }
});
