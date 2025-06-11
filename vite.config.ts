import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path';


export default defineConfig({
  base: '/',
  server:{
    open: true,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
        '/api': {target:"http://83.166.235.140:8080/",
        ws:true,
        changeOrigin: true
      },
      
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components')
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
