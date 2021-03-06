// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import './config/rem'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
