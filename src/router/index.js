import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
