import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './components/MainPage.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/web-profile/',
        name: 'Home',
        component: Home
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router