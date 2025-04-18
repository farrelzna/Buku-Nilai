import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';
import Dashboard from '@/pages/Dashboard.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: <Login />    
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: <Dashboard />
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;