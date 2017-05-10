import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('../components/page/UserHome.vue')), 'user_home')
const Login = r => require.ensure([], () => r(require('../components/page/Login.vue')), 'loin')
const Registry = r => require.ensure([], () => r(require('../components/page/Registry.vue')), 'registry')
export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      redirect: '/user_home'
    }, {
      path: 'user_home',
      component: Home
    }, {
      path: 'login',
      component: Login
    }, {
      path: 'registry',
      component: Registry
    }],
    mode: 'hash'
  }]
})
