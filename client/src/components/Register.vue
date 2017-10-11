<template>
  <div>
    <h1>Login</h1>
    <input type="email"
           name="email"
           v-model="email"
           placeholder="email"/>
    <input type="password"
           name="password"
           v-model="password"
           placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
  import AuthService from '../services/auth'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register () {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      }
    }
  }
</script>


<style scoped>
</style>
