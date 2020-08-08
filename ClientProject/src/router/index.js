import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/registry',
    name: 'Registry',
    component: () => import('../views/Registry.vue')
  },
  {
    path: '/graphic',
    name: 'Graphic',
    component: () => import('../views/Graphic.vue')
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
