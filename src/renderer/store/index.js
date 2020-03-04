import Vue from 'vue'
import Vuex from 'vuex'
import { createPersistedState } from 'vuex-electron'
import modules from './modules'

Vue.use(Vuex)
export default new Vuex.Store({
  modules,
  state: {
    credentials: {
      clientId: '3MVG9I5UQ_0k_hTltfs55mJaUrwLf52xt.LavB7cqVGrj2uXMmspns4Ac1dlxtIEAP0vygNAFHE7zU2YvR2g.',
      clientSecret: '8162DD64C42A1AE0A4E030C220F3C32F9C4AE4CBA60A78359C9EDF560339DA19',
      username: 'gokaygok58@gmail.com',
      password: '3H64y5M$v2c*',
      securityToken: '9uq5YwQJ6tRbQ2GJh1UuAt1Y',
      isProdOrg: 'true'},
    iconUrl: '../../node_modules/@salesforce-ux/design-system/assets/icons/',
    accessToken: '',
    instanceUrl: ''
  },
  actions: {
    setTokenAction ({commit}, val) {
      console.log('setAction girdi', val)
      commit('setToken', val)
    },
    setInstanceAction ({commit}, val) {
      console.log('setAction girdi', val)
      commit('setInstance', val)
    },
    setUsernameAction ({commit}, val) {
      commit('setUsername', val)
    },
    setPasswordAction ({commit}, val) {
      commit('setPassword', val)
    }
  },
  mutations: {
    setToken (state, con) {
      state.accessToken = con
    },
    setInstance (state, ins) {
      state.instanceUrl = ins
    },
    setUsername (state, val) {
      state.credentials.username = val
    },
    setPassword (state, val) {
      state.credentials.password = val
    }
  },
  plugins: [
    createPersistedState()
  ],
  strict: process.env.NODE_ENV !== 'production',
  devtools: true
})
