import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default {
    plugins: [vue()],
    build: {
        assetsDir: 'assets',
    },
} as UserConfig;
