import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: process.env.PORT || 4173, // Use the PORT environment variable or default to 4173
    allowedHosts: [
      'novamind-center.onrender.com', // Add your Render domain here
    ],
  },
});