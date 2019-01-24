import Vue from 'vue'
import Router from 'vue-router'
import webRouter from './web'
import adminRouter from './admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [...webRouter, ...adminRouter]
})
