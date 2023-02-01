import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'pathe'

export default defineConfig({
    resolve: {
        alias: {
            '/@': resolve(__dirname, './src'),
        },
    },
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'tradingview-vue',
            fileName: 'tradingview-vue',
        },
        watch: {
            include: [resolve(__dirname, 'src')],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    optimizeDeps: {
        exclude: ['vue'],
    },
})
