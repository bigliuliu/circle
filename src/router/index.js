import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('../components/page/UserHome.vue')), 'user_home')
// const Main = r => require.ensure([], () => r(require('../components/page/UserMain.vue')), 'user_main')
const Login = r => require.ensure([], () => r(require('../components/page/Login.vue')), 'login')
const Registry = r => require.ensure([], () => r(require('../components/page/Registry.vue')), 'registry')
export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
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
