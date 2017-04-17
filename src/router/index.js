import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import {routerMode} from '../config/env'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('../components/page/Home.vue')), 'home')

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }]
  }],
  mode: routerMode
})
