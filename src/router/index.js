import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

const Home = r => require.ensure([], () => r(require('../components/page/UserHome.vue')), 'user_home')
const UserMain = r => require.ensure([], () => r(require('../components/page/UserMain.vue')), 'user_main')
const Login = r => require.ensure([], () => r(require('../components/page/Login.vue')), 'login')
const Registry = r => require.ensure([], () => r(require('../components/page/Registry.vue')), 'registry')
const Friend = r => require.ensure([], () => r(require('../components/page/Friend.vue')), 'friend')
const Guides = r => require.ensure([], () => r(require('../components/page/Guides.vue')), 'guides')
const Publish = r => require.ensure([], () => r(require('../components/page/Publish.vue')), 'publish')

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
      redirect: '/publish',
      component: Home,
      children: [{
        path: 'main',
        component: Publish
      }, {
        path: 'friend',
        component: Friend
      }, {
        path: 'guides',
        component: Guides
      }]
    }, {
      path: 'login',
      component: Login
    }, {
      path: 'registry',
      component: Registry
    }, {
      path: 'publish',
      component: Publish
    }],
    scrollBehavior,
    mode: 'history'
  }]
})
