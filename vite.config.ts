import { defineConfig } from 'vite'
import path from 'path';
import dotenv from 'dotenv';

import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

dotenv.config();
const apiUrl = process.env.VITE_API_URL;


export default defineConfig({
  base: '/',
  server:{
    open: true,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
        '/api': {target: apiUrl || "https://hacker-news.firebaseio.com/v0",
        ws:true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'app': path.resolve(__dirname, './src/app'),
      'pages': path.resolve(__dirname, './src/pages'),
      'widgets': path.resolve(__dirname, './src/widgets'),
      'features': path.resolve(__dirname, './src/features'),
      'shared': path.resolve(__dirname, './src/shared'),
      'entities': path.resolve(__dirname, './src/entities'),
    }
  },
  build: {
    outDir: path.resolve(__dirname, 'build'),
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].min.js',
        chunkFileNames: '[name].[hash].min.js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
    emptyOutDir: true,
    minify: true,
    assetsDir: '.',
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
