<template>
  <v-layout column class="total">
    <v-flex xs6 offset-xs3>
      <songs-search-panel class="mb-4"></songs-search-panel>
      <songs-panel></songs-panel>
    </v-flex>
  </v-layout>
</template>
<script>
  import songsService from '../../services/songs'
  import songsPanel from './SongsPanel'
  import songsSearchPanel from './SongsSearchPanel'
  export default {
    components: {
      songsPanel,
      songsSearchPanel
    },
    data () {
      return {
        songs: null
      }
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    },
    mounted () {
      songsService.getSongs().then(res => {
        const {allSongs} = res
        this.songs = allSongs
      })
    }
  }
</script>

<style scoped>
  .total {
    margin-bottom: 32vh;
  }
</style>
