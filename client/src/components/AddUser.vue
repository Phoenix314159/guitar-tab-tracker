<template>
  <div class="container">
    <div><h1>Sign Up</h1></div>
    <div class="flex"><input class="form-control"
                             type="firstname"
                             name="firstname"
                             v-model="firstname"
                             placeholder="first name"/>
    </div>
    <div class="flex"><input class="form-control"
                             type="lastname"
                             name="lastname"
                             v-model="lastname"
                             placeholder="last name"/>
    </div>
    <div class="flex"><input class="form-control"
                             type="email"
                             name="email"
                             v-model="email"
                             placeholder="email address"/>
    </div>

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

    <button class="btn btn-primary" @click="addNewUser">Sign Up</button>

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
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      addNewUser () {
        UserService.addNewUser({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          username: this.username,
          password: this.password
        }).then(res => {
          console.log(res)
          if (res.message !== 'new user added') {
            this.error = res
            return
          }
          this.$router.push({name: 'Home'})
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
