import Vue from 'vue'
import vuex from 'vuex'
import { adminLayout } from './modules'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    adminLayout: adminLayout
  }
})
