import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import AddUser from '../components/AddUser'
import Songs from '../components/Songs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signUp',
      component: AddUser
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    }
  ]
})
