import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    define: {
      __APPWRITE_ENDPOINT__: JSON.stringify(env.VITE_APPWRITE_ENDPOINT),
      __APPWRITE_PROJECT_ID__: JSON.stringify(env.VITE_APPWRITE_PROJECT_ID)
    }
  }
})
