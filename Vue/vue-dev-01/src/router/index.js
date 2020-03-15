import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ex01 from '../views/Ex01-Interpolation.vue'
import Ex02 from '../views/Ex02-Binding.vue'
import Ex03 from '../views/Ex03-Routing.vue'
import Ex04 from '../views/Ex04-ConditionalsAndLoops.vue'
import Ex05 from '../views/Ex05-HandlingUserInput.vue'
import Ex06 from '../views/Ex06-Event.vue'
import Ex07 from '../views/Ex07-Data.vue'

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
    path: '/ex-01',
    name: 'ex-01',
    component: Ex01
  },
  {
    path: '/ex-02',
    name: 'ex-02',
    component: Ex02
  },
  {
    path: '/ex-03',
    name: 'ex-03',
    component: Ex03
  },
  {
    path: '/ex-04',
    name: 'ex-04',
    component: Ex04
  },
  {
    path: '/ex-05',
    name: 'ex-05',
    component: Ex05
  },
  {
    path: '/ex-06',
    name: 'ex-06',
    component: Ex06
  },
  {
    path: '/ex-07',
    name: 'ex-07',
    component: Ex07
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
