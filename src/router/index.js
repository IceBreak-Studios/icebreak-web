import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: process.env.NODE_ENV === 'production'
      ? '/icebreak-web'
      : '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    // route level code-splitting
    // this generates a separate chunk (games.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "games" */ '../views/Games.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: function () {
      return import(/* webpackChunkName: "PrivacyPolicy" */ '../components/PrivacyPolicy.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
