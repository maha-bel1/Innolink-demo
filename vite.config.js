import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Environment variables configuration
  envPrefix: 'VITE_',
  // Ensure environment variables are available in the client
  define: {
    'process.env': process.env
  },
  // Server configuration for security headers
  server: {
    headers: {
      // Prevent clickjacking
      'X-Frame-Options': 'SAMEORIGIN',
      // Prevent MIME type sniffing
      'X-Content-Type-Options': 'nosniff',
      // Enable XSS protection
      'X-XSS-Protection': '1; mode=block',
      // Control referrer information
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Content Security Policy with more permissive rules for development
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
        style-src 'self' 'unsafe-inline' https:;
        font-src 'self' data: https:;
        img-src 'self' data: https:;
        connect-src 'self' https:;
        frame-ancestors 'self';
        form-action 'self';
        base-uri 'self';
        object-src 'none';
        worker-src 'self' blob:;
        media-src 'self' https:;
        manifest-src 'self';
      `.replace(/\s+/g, ' ').trim()
    }
  }
})
