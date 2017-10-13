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
    <router-link to="/"><button class="btn btn-primary" @click="login">Login</button></router-link>
    <router-link to="/"><button class="btn btn-danger">Cancel</button></router-link>
  </div>
</template>

<script>
  import UserService from '../services/user'
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        UserService.login({
          username: this.username,
          password: this.password
        })
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
