import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    isLoggedIn: false,
    user: ''
  },
  mutations: {
    setLoggedIn (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setLoggedIn ({commit}, isLoggedIn) {
      commit('setLoggedIn', isLoggedIn)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
