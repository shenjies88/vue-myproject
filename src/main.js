import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from '@/config'
import axios from '@/api/api'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.prototype.$config = config
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
