import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import AddUser from '../components/AddUser'
import Songs from '../components/Songs/Songs'
import CreateSong from '../components/CreateSong'
import Song from '../components/ViewSong/Song'
import EditSong from '../components/EditSong'
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
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: Song
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    }
  ]
})
