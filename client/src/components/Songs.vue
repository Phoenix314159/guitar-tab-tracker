<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2 songs">
        <v-toolbar flat dense class="cyan">
          <v-toolbar-title>Songs</v-toolbar-title>
          <!--<div class="container">-->
          <div v-for="song in songs" :key="song.title">
            {{song.title}}
            {{song.artist}}
          </div>
          <!--</div>-->
        </v-toolbar>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import songsService from '../services/songs'
  export default {
    data () {
      return {
        songs: []
      }
    },
    mounted () {
      songsService.getSongs().then(res => {
        this.songs = res
      })
    }
  }
</script>

<style scoped>
  .songs {
    margin-bottom: 23vh;
  }
</style>
