// process.env.NODE_ENV = ( process.env.NODE_ENV && 
//   ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' )? 
//     'production' : 'development'

import './css/main.css'
import Vue from 'vue'
import Router from 'vue-router'
import {AppComponent} from './components/app'
import {WelcomeComponent} from './components/welcome'


// Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomeComponent,
    },
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app: AppComponent }
})

window['hello'] = 'Hello World!!'