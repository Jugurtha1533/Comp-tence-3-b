import { createRouter, createWebHistory } from 'vue-router'
import Accuiel from '../views/Accuiel.vue'

const routes = [
  {
    path: '/',
    name: 'Accuiel',
    component: Accuiel
  },
  {
    path: '/Destinations',
    name: 'Destinations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Destinations.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
