<template>
  <v-layout column class="total">
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div v-for="song in songs" :key="song.title">
          {{song.title}}
          {{song.artist}}
          {{song.genre}}
          {{song.album}}
        </div>

      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import songsService from '../services/songs'
  import panel from './panel'
  export default {
    components: {
      panel
    },
    data () {
      return {
        songs: null
      }
    },
    mounted () {
      songsService.getSongs().then(res => {
        this.songs = res.allSongs
      })
    }
  }
</script>

<style scoped>
  .songs {
    margin-bottom: 23vh;
  }
</style>
