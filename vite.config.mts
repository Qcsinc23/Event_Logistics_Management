import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    build: {
      outDir: "build",
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    plugins: [
      react(),
      VitePWA({
        disable: true
      })
    ],
    optimizeDeps: {
      include: [
        'konva', 
        'react-konva',
        '@mui/material',
        '@mui/icons-material',
        '@mui/lab',
        '@mui/x-date-pickers',
        'react-dropzone',
        'recharts'
      ],
      esbuildOptions: {
        resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    define: {
      __REACT_ROUTER_FUTURE_FLAGS__: JSON.stringify({
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }),
      __APPWRITE_ENDPOINT__: JSON.stringify(env.VITE_APPWRITE_ENDPOINT),
      __APPWRITE_PROJECT_ID__: JSON.stringify(env.VITE_APPWRITE_PROJECT_ID),
    },
    resolve: {
      dedupe: ['react', 'react-dom', 'konva', 'react-konva'],
    },
  }
})
