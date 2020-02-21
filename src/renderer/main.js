import Vue from 'vue'
import axios from 'axios'

import App from './App'

import store from './store'

import VueGlobalVar from 'vue-global-var'
Vue.config.productionTip = false
Vue.use(VueGlobalVar, {
  globals: {
    credentials: {
      clientId: '3MVG9I5UQ_0k_hTltfs55mJaUrwLf52xt.LavB7cqVGrj2uXMmspns4Ac1dlxtIEAP0vygNAFHE7zU2YvR2g.',
      clientSecret: '8162DD64C42A1AE0A4E030C220F3C32F9C4AE4CBA60A78359C9EDF560339DA19',
      username: 'gokaygok58@gmail.com',
      password: '3H64y5M$v2c*',
      securityToken: '9uq5YwQJ6tRbQ2GJh1UuAt1Y',
      isProdOrg: 'false'},
    iconUrl: '../../node_modules/@salesforce-ux/design-system/assets/icons/',
    connection: {
      set: function (value) {
        this.connection = value
      }
    }
  }

})
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
