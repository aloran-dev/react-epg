/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // usePolling leads to high CPU usage, so it is recommended to use it only in WSL2
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})