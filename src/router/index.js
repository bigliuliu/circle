import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import {routerMode} from '../config/env'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('@/components/page/Home.vue')), 'home')
const Item = r => require.ensure([], () => r(require('@/components/page/Item.vue')), 'item')
const Score = r => require.ensure([], () => r(require('@/components/page/Score.vue')), 'score')

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
    }, {
      path: '/score',
      component: Score
    }]
  }],
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})
