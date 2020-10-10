import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('./views'),
    }
]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes,
    mode: 'history'
})

export default router