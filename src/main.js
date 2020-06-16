import Vue from 'vue'
import App from './App.vue'
import * as client from '@iota/iota-rs-wasm/web'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$iota = client;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
