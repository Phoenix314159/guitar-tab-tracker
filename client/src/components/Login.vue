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

    <router-link to="/">
      <button class="btn btn-danger">Cancel</button>
    </router-link>
    <div class="error">{{error}}</div>
  </div>
</template>

<script>
  import UserService from '../services/user'
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
        UserService.login({
          username: this.username,
          password: this.password
        }).then(res => {
          if (res === 'you are logged in') {
            this.$router.push({name: 'Home'})
          }
          this.error = res
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

  .error {
    color: red;
    margin-top: 2vh;
  }
</style>
