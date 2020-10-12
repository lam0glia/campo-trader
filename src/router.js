import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('./views'),
    },
    {
        path: '/stocks',
        component: () => import('./views/Stocks'),
    }
]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes,
    mode: 'history'
})

export default router