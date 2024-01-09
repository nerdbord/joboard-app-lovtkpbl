import { defineConfig } from 'vite';
import vitest, { test } from 'vitest';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
});
