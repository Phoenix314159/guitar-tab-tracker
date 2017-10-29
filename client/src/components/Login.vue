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
  import panel from './panel'
  export default {
    components: {
      panel
    },
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
            this.$router.push({name: 'home'})
          }
          this.error = res
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
