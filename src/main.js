import Vue from 'vue'
import App from './App.vue'

// import Bootstrap
import BootstrapVue from 'bootstrap-vue'

// import router
import router from './router'

// install BootstrapVue
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
