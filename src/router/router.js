import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'
import system from "./route-groups/system";

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            mainNavigation: () => import(/* webpackChunkName: "mainNavigation" */ '../views/mainNavigation/mainNavigation.vue'),
            default: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue'),
        },
        children: [ ]
    },
    {
        path: '/calc-flex',
        name: 'calc-flex',
        components: {
            default: () => import(/* webpackChunkName: "calcFlex" */ '../views/calc-flex/calc_flex.vue'),
        },
        children: []
    },

    ...system,

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
