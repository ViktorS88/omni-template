export default  [
  {
        path: '/',
        name: 'pageHome',
        components: {
            default: () => import(/* webpackChunkName: "pageHome" */ '../../../views/home/home.vue'),
        },
        children: [

        ]
    },
  {
        path: '/keys2',
        name: 'keys2',
        components: {
            default: () => import(/* webpackChunkName: "keys2" */ '@/views/main/semanticLayout/keys2/keys2.vue'),
        },
        children: [

        ]
    },

]
