import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/main'
import Home from '@/views/home/index'
import WebsiteConstruction from '@/views/websiteConstruction/index'
import Marketing from '@/views/marketing/index'
import Cases from '@/views/cases/index'
import Price from '@/views/price/index'
import SmallProgram from '@/views/smallProgram/index'
import AboutUs from '@/views/aboutUs/index'
import JoinUs from '@/views/joinUs/index'

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
          component: Home,
          meta:{
            name:'首页'
          }
        },
        { 
          path: '/website',
          name: 'WebsiteConstruction',
          component: WebsiteConstruction,
          meta:{
            name:'网站建设'
          }
        },
        { 
          path: '/marketing',
          name: 'Marketing',
          component: Marketing,
          meta:{
            name:'营销推广'
          }
        },
        { 
          path: '/cases',
          name: 'Cases',
          component: Cases,
          meta:{
            name:'客户案例'
          }
        },
        { 
          path: '/price',
          name: 'Price',
          component: Price,
          meta:{
            name:'价格'
          }
        },
        { 
          path: '/program',
          name: 'SmallProgram',
          component: SmallProgram,
          meta:{
            name:'小程序'
          }
        },
        { 
          path: '/about_us',
          name: 'AboutUs',
          component: AboutUs,
          meta:{
            name:'关于我们'
          }
        },
        { 
          path: '/join_us',
          name: 'JoinUs',
          component: JoinUs,
          meta:{
            name:'加入我们'
          }
        }
      ]
    }
  ]
})




export default router