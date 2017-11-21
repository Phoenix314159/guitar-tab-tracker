import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from './components/globals/Panel.vue'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
