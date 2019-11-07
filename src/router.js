import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Archives from './views/Archives.vue';
import Cashier from './views/Cashier.vue';
import ClosedCashiers from './views/ClosedCashiers.vue';
import Login from './views/Login.vue';
import Pendings from './views/Pendings.vue';
import Prestashop from './views/Prestashop.vue';
import Settings from './views/Settings.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: Cashier
    },
    {
      path: '/archives',
      name: 'archives',
      component: Archives
    },
    {
      path: '/closedcashiers',
      name: 'closedcashiers',
      component: ClosedCashiers
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/pendings',
      name: 'pendings',
      component: Pendings
    },
    {
      // TODO: To modify, it will be a name space of different E Shops
      path: '/prestashop',
      name: 'prestashop',
      component: Prestashop
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
