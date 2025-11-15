import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.fs', '**/*.glsl', '**/*.vs', '**/*.frag', '**/*.vert'],
})

