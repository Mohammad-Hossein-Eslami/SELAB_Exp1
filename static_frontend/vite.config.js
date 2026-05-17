import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        writeups: resolve(__dirname, 'components/writeups.html'),
        tools: resolve(__dirname, 'components/tools.html'),
        contact: resolve(__dirname, 'components/contact.html'),
      },
    },
  },
});