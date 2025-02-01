import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  return defineConfig({
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_APP_API_HOST,
          changeOrigin: true
        }
      }
    },
    plugins: [
      vue(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        }
      })
    ],
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  })
}