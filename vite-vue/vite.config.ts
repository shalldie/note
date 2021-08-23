// import path from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',

    plugins: [
        vue(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],

    build: {
        // target: 'es2015',
        // lib: {
        //     entry: path.join(__dirname, 'src/main.ts'),
        //     name: 'ViteVue',
        //     fileName: format => `vite-vue.${format}.js`
        // },
        // rollupOptions: {
        //     // 确保外部化处理那些你不想打包进库的依赖
        //     external: ['vue'],
        //     output: {
        //         // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        //         globals: {
        //             vue: 'Vue'
        //         }
        //     }
        // }
    }
});
