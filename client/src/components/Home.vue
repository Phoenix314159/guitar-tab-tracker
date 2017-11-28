<template>
  <div class="home">
    <h1>{{ msg }}</h1>
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
