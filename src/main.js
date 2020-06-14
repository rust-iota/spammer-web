import Vue from 'vue'
import App from './App.vue'
import * as client from '@iota/iota-rs-wasm/web'

Vue.config.productionTip = false
Vue.prototype.$iota = client;

new Vue({
  render: h => h(App),
}).$mount('#app')
