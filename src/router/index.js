import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import collect from '@/components/collect'
import Test2 from '@/components/Test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/collect',
      name: 'collect',
      component: collect
    }, {
      path: '/test2',
      name: 'Test2',
      component: Test2
    }
  ]
})
