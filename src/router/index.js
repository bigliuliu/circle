import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('../components/page/Home.vue')), 'home')
const City = r => require.ensure([], () => r(require('../components/page/City.vue')), 'city')
const Msite = r => require.ensure([], () => r(require('../components/page/Msite.vue')), 'msite')
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
      path: '/city/:cityid',
      component: City
    }, {
      path: '/msite',
      component: Msite
    }]
  }],
  mode: 'hash'
})
