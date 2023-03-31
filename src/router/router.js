import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'
import system from "./route-groups/system";
import routeMain from "@/router/route-main/route-main.js";

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            mainNavigation: () => import(/* webpackChunkName: "mainNavigation" */ '../views/mainNavigation/mainNavigation.vue'),
            default: () => import(/* webpackChunkName: "mainPage" */ '../views/main/mainPage/mainPage.vue'),
        },
        children: [ ...routeMain ]
    },


    {
        path: '/calc-flex',
        name: 'calc-flex',
        components: {
            mainNavigation: () => import(/* webpackChunkName: "mainNavigation" */ '../views/mainNavigation/mainNavigation.vue'),
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
