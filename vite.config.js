import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

function locatePATH (path) {
  return fileURLToPath(new URL(path, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: env.VITE_APP_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': locatePATH('./src'),
        '~@': locatePATH('./src'),
        '@assets': locatePATH('./src/assets'),
        '@components': locatePATH('./src/components'),
        '@layouts': locatePATH('./src/layouts'),
        '@libs': locatePATH('./src/libs'),
        '@pages': locatePATH('./src/pages'),
        '@plugins': locatePATH('./src/plugins'),
        '@router': locatePATH('./src/router'),
        '@services': locatePATH('./src/services'),
        '@stores': locatePATH('./src/stores'),
        '@styles': locatePATH('./src/styles'),
        '@utils': locatePATH('./src/utils')
      }
    },
    plugins: [vue()],
  }
})
