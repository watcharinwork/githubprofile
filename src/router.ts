import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from './components/MainPage.vue'
const routes: RouteRecordRaw[] = [
    /* {
        path: '/',
        name: 'Home',
        component: Home
    } */
    {
        path: '/',
        name: 'Main',
        component: Main
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router