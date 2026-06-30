import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      '/api/proxy': {
        target: 'https://api.restcountries.com/countries/v5',
        changeOrigin: true,
        rewrite: () => '',
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            const url = new URL(req.url!, 'http://localhost');
            url.searchParams.set('api-key', process.env.REST_COUNTRIES_API_KEY!);
            proxyReq.path = '/?' + url.searchParams.toString();
          });
        },
      },
    },
  },
})