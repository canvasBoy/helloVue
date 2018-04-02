import Vue from 'vue'
import Router from 'vue-router'

import index from '@/index/index'
import myCenter from '@/My-Center/index'
import lottery from '@/My-Center/lottery/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/MyCenter',
      name: 'MyCenter',
      component: myCenter
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: lottery
    }
  ]
})
