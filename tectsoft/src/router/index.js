import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import appCustomer from "@/views/customer/appCustomer";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
            //Dispatcher
  {
   path: '/loginDispatcher',
   name: 'LoginDispatcher',
    component: () => import('../views/Dispatcher/loginDispatcher')
  },
  {
    path: '/dispatcher/:id',
    name: 'AppDispatcher',
    component: () => import('../views/Dispatcher/appDispatcher')
  },
            //customer
  {
    path:'/customer',
    name: 'AppCustomer',
    component: appCustomer,
    children:[
      {
        path:'home',
        name: 'HomeCustomer',
        component: ()=> import('@/views/customer/homeCustomer'),
      },
      {
        path:'packageinfo/',
        name: 'PackageInfo',
        component: ()=> import('@/views/customer/customerPackageInfo')
      },
      {
        path: `/tracking/2`,
        name: `InRoute`,
        component:()=>import('@/components/customer/package/tracking/inRouteState')
      },
      {
        path: `/tracking/3`,
        name: `InDestinyTerminal`,
        component:()=>import('@/components/customer/package/tracking/inDestinyTerminalState')
      },
      {
        path: `/tracking/1`,
        name: `Waiting`,
        component:()=>import('@/components/customer/package/tracking/waitingState')
      },
      {
        path: `mypackages`,
        name: `MyPackages`,
        component: ()=> import('@/views/customer/myPackages')
      },
      {
        path: `chat`,
        name: `Chat`,
        component: () => import('../components/customer/chat/chat')
      },
      {
        path: '/customer/newpackage',
        name: 'NewPackage',
        component: () => import('../components/customer/package/add/newPackage')
      },
      {
        path: '/customer/findCompany',
        name: 'FindCompany',
        component: () => import('../components/customer/package/add/findCompany')
      },
      {
        path: '/company/moreinfo',
        name: 'MoreInfo',
        component: () => import('../components/customer/package/add/moreInfo.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
