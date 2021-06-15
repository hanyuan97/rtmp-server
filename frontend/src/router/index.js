import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '../views/Video'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    name: 'Video',
    component: Video
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
