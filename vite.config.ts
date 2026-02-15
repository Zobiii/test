import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        guide: resolve(__dirname, 'guide/index.html'),
        api: resolve(__dirname, 'api/index.html'),
        logger: resolve(__dirname, 'api/T_Shiron_Lib_Logging_Logger/index.html'),
        stringType: resolve(__dirname, 'api/T_System_String/index.html'),
        mcp: resolve(__dirname, 'mcp-server/index.html')
      }
    }
  }
});
