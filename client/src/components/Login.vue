<template>
  <div class="container">
    <div><h1>Login</h1></div>

    <div class="flex"><input class="form-control"
                             type="username"
                             name="username"
                             v-model="username"
                             placeholder="username"/>
    </div>
    <div class="flex"><input class="form-control"
                             type="password"
                             name="password"
                             v-model="password"
                             placeholder="password"/>
    </div>
    <br>
    <button class="btn btn-primary" @click="login">Login</button>
  </div>
</template>

<script>
  import AuthService from '../services/user'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login () {
        const response = await AuthService.login({
          username: this.username,
          password: this.password
        })
        console.log(response.data)
      }
    }
  }
</script>


<style scoped>
  .form-control {
    width: 15vw;
  }

  .flex {
    display: flex;
    justify-content: center;
  }
</style>
