import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingView.vue'

import { useSessionStore } from '@/store/session'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: checkAuth
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ajustes',
    name: 'ajustes',
    beforeEnter: [checkAuth],
    component: () => import(/* webpackChunkName: "about" */ '../views/AjustesUsuarioView.vue')
  },
  {
    path: '/mediciones',
    name: 'mediciones',
    beforeEnter: checkAuth,
    component: () => import(/* webpackChunkName: "about" */ '../views/MedicionesView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPassword.vue')
  },
  {
    path: '/',
    name: '/',
    component: LandingView
  },
  {
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

function  checkAuth(to, from, next) 
{
    if (useSessionStore().isLogged) next();
    else next("/login");
}


// function checkRolAyto(to, from, next) 
// {
//     if (useSessionStore().user?.rol === 'AYUNTAMIENTO') next();
//     else next(from.name);
// }

export default router
