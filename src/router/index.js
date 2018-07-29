import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/main'
import Home from '@/views/home/index'


Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        { 
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})




export default router