import './main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/mods',
            component: () => import('./views/mods.vue')
        },
        {
            path: '/',
            component: () => import('./views/index.vue')
        }
    ]
});

app.use(router);

app.mount('#app');


