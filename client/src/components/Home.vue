<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      <br>
      <router-link to="/signup">
        <li>
          <button class="btn btn-primary">Sign Up</button>
        </li>
      </router-link>
    </ul>
    <ul>
      <router-link to="/login">
        <button class="btn btn-primary">Login</button>
      </router-link>
      <button class="btn btn-warning" @click="logout">Logout</button>
      <button class="btn btn-danger" @click="currentUser">Current User</button>
      <h1>{{ user }}</h1>
    </ul>
  </div>
</template>

<script>
  import UserService from '../services/user'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        user: ''
      }
    },
    methods: {
      logout () {
        UserService.logout()
        this.user = ''
      },
      currentUser () {
        UserService.currentUser().then(res => {
          this.user = res
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
