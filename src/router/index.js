import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import building from '@/components/building'
import cloud from '@/components/cloud'
import test from '@/pages/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/building',
      name: 'building',
      component: building
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: cloud
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
