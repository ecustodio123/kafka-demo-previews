import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

import { previewMetaPlugin } from './vite/previewMetaPlugin.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.SITE_URL ? env.SITE_URL.replace(/\/?$/, '/') : undefined

  return {
    plugins: [react(), tailwindcss(), previewMetaPlugin({ siteUrl })],
  }
})
