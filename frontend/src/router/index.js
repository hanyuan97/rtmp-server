import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main'
// import Live from '../views/Live'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import("../views/Main")
  },
  {
    path: '/:id',
    name: 'Live',
    component: () => import("../views/Live")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
