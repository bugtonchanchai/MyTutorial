import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ex01 from '../views/Ex01_Interpolation.vue'
import Ex02 from '../views/Ex02_Binding.vue'
import Ex03 from '../views/Ex03_Routing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ex01',
    name: 'ex01',
    component: Ex01
  },
  {
    path: '/ex02',
    name: 'ex02',
    component: Ex02
  },
  {
    path: '/ex03',
    name: 'ex03',
    component: Ex03
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
