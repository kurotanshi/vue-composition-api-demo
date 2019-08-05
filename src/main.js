import Vue from 'vue'
import App from './App.vue'
import { plugin } from "vue-function-api";

Vue.config.productionTip = false
Vue.use(plugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
