// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../ui/home/Home.vue'
import About from '../ui/about/About.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About }
    ]
  })
}
