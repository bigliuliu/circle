import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('../components/page/UserHome.vue')), 'user_home')
const UserMain = r => require.ensure([], () => r(require('../components/page/UserMain.vue')), 'user_main')
const Login = r => require.ensure([], () => r(require('../components/page/Login.vue')), 'login')
const Registry = r => require.ensure([], () => r(require('../components/page/Registry.vue')), 'registry')
const Friend = r => require.ensure([], () => r(require('../components/page/Friend.vue')), 'friend')

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    return position
  }
}

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      redirect: '/main',
      component: Home,
      children: [{
        path: 'main',
        component: UserMain
      }, {
        path: 'friend',
        component: Friend
      }]
    }, {
      path: 'login',
      component: Login
    }, {
      path: 'registry',
      component: Registry
    }],
    scrollBehavior,
    mode: 'history'
  }]
})
