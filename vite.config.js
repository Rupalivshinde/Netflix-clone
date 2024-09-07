import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Netflix-clone/", // Correct usage with trailing slash
  plugins: [react()],
});
