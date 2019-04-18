import Vue from 'vue'
import App from './App.vue'

import './assets/js/rem.js'
import './assets/stylus/index.styl'
import './assets/js/iconfont.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
