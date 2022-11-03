import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import isLoggedMiddleware from '../middleware/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mediciones',
    name: 'mediciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/MedicionesView.vue'),
    beforeEnter(to) {
      return isLoggedMiddleware(to)
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
