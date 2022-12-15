import Main from '@/pages/main'
import Posts from '@/pages/listPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router