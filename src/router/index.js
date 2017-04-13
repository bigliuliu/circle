import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

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
      component: Home
    }, {
      path: '/item',
      component: Item
    }, {
      path: '/score',
      component: Score
    }]
  }]
})
