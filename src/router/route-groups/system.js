export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../../views/system/page404'),
    // component: {
    //   template: 'такой страницы не существует 404!!!!!!!!!!!!!!!!!!!!!!'
    // }
  },

]
