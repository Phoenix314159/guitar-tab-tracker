<template>
  <v-toolbar fixed class="orange darken 2">
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'home'})">
        Tab-Tracker
      </span>
    </v-toolbar-title>
    <v-btn flat dark @click="navigateTo({name: 'songs'})">
      Browse
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'login'})" v-if="!$store.state.isLoggedIn">
        Login
      </v-btn>
      <v-btn flat dark @click="logout(); navigateTo({name: 'home'})" v-if="$store.state.isLoggedIn">
        Logout
      </v-btn>
      <v-btn flat dark @click="navigateTo({name: 'signUp'});" v-if="!$store.state.isLoggedIn">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import userService from '../services/user'
  export default {
    data () {
      return {
        loggedIn: true
      }
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        userService.logout().then(res => {
          const {dispatch} = this.$store
          dispatch('setLoggedIn', false)
          const message = res.data
          if (message === 'you must login first') {
            this.user = message
          }
          this.user = ''
        })
      }
    }
  }
</script>

<style scoped>
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: #3B5998;
  }

</style>
