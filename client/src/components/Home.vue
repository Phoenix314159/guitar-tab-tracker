<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<ul>-->
    <!--<router-link to="/signup">-->
    <!--<li>-->
    <!--<button class="btn btn-primary">Sign Up</button>-->
    <!--</li>-->
    <!--</router-link>-->
    <!--</ul>-->
    <!--<ul>-->
    <!--<router-link to="/login">-->
    <!--<button class="btn btn-primary">Login</button>-->
    <!--</router-link>-->
    <!--<button class="btn btn-warning" @click="getState">Logout</button>-->
    <!--<button class="btn btn-danger" @click="currentUser">Current User</button>-->
    <!--<h1>{{ user }}</h1>-->
    <!--</ul>-->
  </div>
</template>

<script>
  //  import UserService from '../services/user'
  export default {
    name: 'Home',
    data () {
      return {
        msg: '',
        user: ''
      }
    },
    created: function () {
      const {state: {isLoggedIn}} = this.$store
      if (isLoggedIn) {
        const {state: {user}} = this.$store
        this.msg = `Welcome ${user}`
      }
    },
    updated: function () {
      const {state: {isLoggedIn}} = this.$store
      if (!isLoggedIn) {
        this.msg = ''
      }
    },
    methods: {
//      login () {
//        UserService.login().then(res => {
//          const {message, user: {firstName}} = res.data
//          if (message === 'please create an account') {
//            return message
//          } else {
//            return `Welcome ${firstName}`
//          }
//        })
//      },
//      logout () {
//        const {dispatch} = this.$store
//        UserService.logout().then(res => {
//          dispatch('setLoggedOut', true)
//          const message = res.data
//          if (message === 'you must login first') {
//            this.user = message
//          }
//          this.user = ''
//        })
//      },
//      currentUser () {
//        UserService.currentUser().then(res => {
//          this.user = res
//        })
//      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
