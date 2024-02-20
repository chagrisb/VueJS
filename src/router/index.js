import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Demo1 from '../views/Demo.vue'
import Demo2 from '../views/Demo2.vue'
import Demo3 from '../views/Demo3.vue'
import Demo4 from '../views/Demo4.vue'
import Demo5 from '../views/Demo5.vue'
import Demo6 from '../views/Demo6.vue'
import Demo7 from '../views/Demo7.vue'
import Demo8 from '../views/Demo8.vue'
import Demo9 from '../views/Demo9.vue'
import DemoTen from '../views/Demo10.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: Demo4
  },
  {
    path: '/demo5',
    name: 'demo5',
    component: Demo5
  },
  {
    path: '/demo6',
    name: 'demo6',
    component: Demo6
  },
  {
    path: '/demo7',
    name: 'demo7',
    component: Demo7
  },
  {
    path: '/demo8',
    name: 'demo8',
    component: Demo8
  },
  {
    path: '/demo9',
    name: 'demo9',
    component: Demo9
  },
  {
    path: '/demo10',
    name: 'demo10',
    component: DemoTen
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
