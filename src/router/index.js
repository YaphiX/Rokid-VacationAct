import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import collect from '@/components/collect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/collect/:id',
      name: 'collect',
      component: collect
    }
  ]
})
