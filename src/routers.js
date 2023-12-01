import HomePage from './components/HomePage.vue';
import LogIn from './components/LogIn.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/auth',
        name: 'LogIn',
        component: LogIn
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;