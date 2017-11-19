<template>
  <v-layout column class="total">
    <v-flex xs6 offset-xs3>
      <panel title="Login">
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
        <div class="error1">{{error}}</div>
      </panel>
    </v-flex>
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
          const {dispatch} = this.$store
          const {message} = res
          if (message === 'you are logged in') {
            const {user: {firstname}} = res
            dispatch('setLoggedIn', true)
            dispatch('setUser', firstname)
            this.$router.push({name: 'home'})
          }
          this.error = message
        })
      }
    }
  }
</script>


<style scoped>
  .total {
    margin-bottom: 22vh;
  }

  .container {
    width: 35vw;
    /*margin-top: 10vh;*/
  }

  .error1 {
    color: red;
    margin-top: 2vh;
  }
</style>
