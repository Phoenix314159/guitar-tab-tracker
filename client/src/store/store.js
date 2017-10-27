import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    isLoggedIn: false

  },
  mutations: {
    setLoggedIn (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    }
  },
  actions: {
    setLoggedIn ({commit}, isLoggedIn) {
      commit('setLoggedIn', isLoggedIn)
    }
  }
})
