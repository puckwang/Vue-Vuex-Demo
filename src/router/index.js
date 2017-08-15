import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import CtoF from '../components/CtoF'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }, {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    }, {
      path: '/*',
      redirect: '/hello'
    }
  ]
})
