<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
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
