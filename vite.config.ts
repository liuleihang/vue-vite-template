import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import EslintPlugin from 'vite-plugin-eslint';
import UnoCSS from 'unocss/vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vitejs.dev/config/
const root = process.cwd();

function pathResolve(dir: string) {
  return resolve(root, '.', dir);
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any;
  const isBuild = command === 'build';
  if (!isBuild) {
    env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], root);
  } else {
    env = loadEnv(mode, root);
  }
  return {
    plugins: [
      vue(),
      vueJsx(),
      EslintPlugin(),
      UnoCSS(),
      ViteEjsPlugin({
        title: env.VITE_APP_TITLE,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0', //监听所有IP地址
      port: 8088, //启动端口
      hmr: {
        host: '127.0.0.1',
        port: 8080,
      },
      // 设置 https 代理
      proxy: {
        '/api': {
          target: '127.0.0.1:3000',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
};
