<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <div class="container">
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
        </div>
      </div>
    </v-flex>
    <div class="error1">{{error}}</div>
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
    width: 35vw;
    margin-bottom: 23vh;
  }
  .error1 {
    margin-top: 2vh;
    color: red;
  }
</style>
