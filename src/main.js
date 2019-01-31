import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/Home.vue'
import Search from '@/components/Search.vue'
import Favorite from '@/components/Favorite.vue'

const router = new VueRouter({
  routes: [
    // Configuration des routes de l'application
    { name: 'home', path: '/', component: Home },
    { name: 'search', path: '/search', component: Search },
    { name: 'Favorite', path: '/favorite', component: Favorite}
  ]
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
