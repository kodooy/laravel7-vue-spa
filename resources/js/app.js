import Vue from 'vue'
import App from './layout/App'
import store from './store'
import router from './router'
import axios from 'axios'
import { isEmpty } from 'lodash'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
window.axios = axios

axios.post('/auth/check').then(({data}) => {
  if (!isEmpty(data)) {
    store.dispatch('auth/setAuthUser', data)
  }

  const app = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
  })
})