// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from 'src/App'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller'
import ratings from 'components/ratings/ratings'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

let app = Vue.extend(App)

let router = new VueRouter({
  linkActiveClass: 'active'

})
router.map({
  '/goods': {
    component: goods
  },
    '/ratings': {
      component: ratings
    },
    '/seller': {
      component: seller
    }
}
)
router.start(app, '#app')
