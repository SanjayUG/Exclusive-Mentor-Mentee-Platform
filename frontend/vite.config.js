import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://mentorlink-backned.onrender.com', 
        changeOrigin: true,
        secure: true, // Updated to true for production-grade security
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites the API prefix if necessary
      },
    },
  },
});
