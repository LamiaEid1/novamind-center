import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/novamind-center/', // Replace with your actual GitHub repo name
  build: {
    outDir: 'public' // Change output directory from 'dist' to 'public'
  }
});
