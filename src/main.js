import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueLodash, { lodash: lodash });

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
