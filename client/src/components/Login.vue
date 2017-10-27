<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="container">
          <v-text-field
            label="Username"
            v-model="username"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
          <br>
          <button class="btn btn-primary" @click="login">Login</button>
          <router-link to="/">
            <button class="btn btn-danger">Cancel</button>
          </router-link>
        </div>
      </div>
    </v-flex>
    <div class="error1">{{error}}</div>
  </v-layout>
</template>

<script>
  import userService from '../services/user'
  export default {
    data () {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login () {
        userService.login({
          username: this.username,
          password: this.password
        }).then(res => {
          if (res === 'you are logged in') {
            this.$store.dispatch('setLoggedIn', true)
            this.$router.push({name: 'Home'})
          }
          this.error = res
        })
      }
    }
  }
</script>


<style scoped>
  .container {
    width: 35vw;
    margin-bottom: 23vh;
  }
  .error1 {
    color: red;
    margin-top: 2vh;
  }
</style>
