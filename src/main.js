import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import vuetify from './plugins/vuetify'
import vueMoment from 'vue-moment';

Vue.config.productionTip = false

new Vue({
  // router,
  vueMoment,
  vuetify,
  render: h => h(App)
}).$mount('#app')
