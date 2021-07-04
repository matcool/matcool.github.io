import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: resolve(__dirname, '404.html')
            }
        }
    },
    server: {
        hmr: {
            overlay: false
        }
    },
    
});
