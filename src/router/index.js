import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../pages/Hello'
import CtoF from '../pages/CtoF'
import learnComponent from '../pages/learnComponent'

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
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent
    }, {
      path: '/*',
      redirect: '/hello'
    }
  ]
})
