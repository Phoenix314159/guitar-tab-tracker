<template>
  <v-layout column class="container">
    <v-flex xs6 offset-xs3>
      <panel title="Sign Up">
        <v-text-field
          label="First Name"
          v-model="firstname"
        ></v-text-field>
        <v-text-field
          label="Last Name"
          v-model="lastname"
        ></v-text-field>
        <v-text-field
          label="Email Address"
          v-model="email"
        ></v-text-field>
        <v-text-field
          label="Username"
          v-model="username"
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
        ></v-text-field>
        <br>
        <button class="btn btn-primary" @click="addNewUser">Sign Up</button>
        <router-link to="/">
          <button class="btn btn-danger">Cancel</button>
        </router-link>
        <div class="error1">{{error}}</div>
      </panel>
    </v-flex>
  </v-layout>
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
  .container {
    width: 45vw;
    margin-bottom: 30vh;
    padding: 2%;
  }

  .error1 {
    color: red;
    margin-top: 2vh;
  }
</style>
