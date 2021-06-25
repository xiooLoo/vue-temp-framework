import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import XiUU from 'xiuu-ui/packages/index'
import 'xiuu-ui/packages/theme-default/lib/index.css'
Vue.config.productionTip = false
Vue.use(XiUU)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
