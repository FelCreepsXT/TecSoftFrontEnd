import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/dispatcher/:dispatcherId',
    name: 'AppDispatcher',
    component: () => import('../views/Dispatcher/appDispatcher'),
    children: [
      {
        path: 'home',
        name: 'HomeDispatcher',
        component: () => import('../views/Dispatcher/homeDispatcher')
      },
      {
        path: 'package',
        name: 'PackageDispatcher',
        component: () => import('../components/Dispatcher/updatePackageDispatcher'),
        children: [
          {
            path: '0',
            name: 'DispatcherState0',
            component: () => import('../components/Dispatcher/StatePackage/PackageNull')
          },
          {
            path: '1',
            name: 'DispatcherState1',
            component: () => import('../components/Dispatcher/StatePackage/PackageState1')
          },
          {
            path: '2',
            name: 'DispatcherState2',
            component: () => import('../components/Dispatcher/StatePackage/PackageState2')
          },
          {
            path: '3',
            name: 'DispatcherState3',
            component: () => import('../components/Dispatcher/StatePackage/PackageState3')
          }
        ]
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
