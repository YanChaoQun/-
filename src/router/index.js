import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import buy from '@/pages/buy/buy'
import city from '@/pages/citys/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/detail/:id',
      name:'buy',
      component:buy
    },{
      path:'/city',
      name:'city',
      component:city
    }
  ]
})



