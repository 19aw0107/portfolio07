import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/works01',
      name: 'Works01',
      component: () => import('../views/Works01.vue')
    },
    {
      path: '/works02',
      name: 'Works02',
      component: () => import('../views/Works02.vue')
    },
    {
      path: '/works03',
      name: 'Works03',
      component: () => import('../views/Works03.vue')
    },
    {
      path: '/works04',
      name: 'Works04',
      component: () => import('../views/Works04.vue')
    },
    {
      path: '/works05',
      name: 'Works05',
      component: () => import('../views/Works05.vue')
    },
    {
      path: '/works06',
      name: 'Works06',
      component: () => import('../views/Works06.vue')
    },
    {
      path: '/works07',
      name: 'Works07',
      component: () => import('../views/Works07.vue')
    },
    {
      path: '/works08',
      name: 'Works08',
      component: () => import('../views/Works08.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      sessionStorage.setItem('positionY', savedPosition.y);
      return savedPosition
    } else {
      sessionStorage.setItem('positionY', 0);
      return { x: 0, y: 0 }
    }
  }
})

export default router
