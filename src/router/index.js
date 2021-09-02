import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/News.vue')
    }
  },
  {
    path: '/news/:id',
    name: 'HomeId',
    component: function () {
      return import('../views/News.vue')
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: function () {
      return import('../views/NotFound.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
