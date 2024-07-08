/// <reference types="vitest" />

import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },

  root: '.',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./.test/setup.js'],
    include: ['**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vr-challenge-ds',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
