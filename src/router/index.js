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
import Distribute from '@/views/distribute/index'


Vue.use(Router)

const router = new Router({
  mode:'history',
  scrollBehavior: () => ({ y: 0 }),
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
            name:'首页',
            id: 0
          }
        },
        { 
          path: '/website',
          name: 'WebsiteConstruction',
          component: WebsiteConstruction,
          meta:{
            name:'网站建设',
            id: 1
          }
        },
        { 
          path: '/marketing',
          name: 'Marketing',
          component: Marketing,
          meta:{
            name:'营销推广',
            id: 2
          }
        },
        { 
          path: '/cases',
          name: 'Cases',
          component: Cases,
          meta:{
            name:'客户案例',
            id: 3
          }
        },
        { 
          path: '/price',
          name: 'Price',
          component: Price,
          meta:{
            name:'价格',
            id: 4
          }
        },
        { 
          path: '/program',
          name: 'SmallProgram',
          component: SmallProgram,
          meta:{
            name:'小程序',
            id: 5
          }
        },
        { 
          path: '/distribute',
          name: 'Distribute',
          component: Distribute,
          meta:{
            name:'分销系统',
            id: 6
          }
        },
        { 
          path: '/about_us',
          name: 'AboutUs',
          component: AboutUs,
          meta:{
            name:'关于我们',
            id: 7
          }
        },
        { 
          path: '/join_us',
          name: 'JoinUs',
          component: JoinUs,
          meta:{
            name:'加入我们',
            id: 8
          }
        }
      ]
    }
  ]
})




export default router