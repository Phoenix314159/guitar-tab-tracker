<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Data">
        <div class="song-title">
          Title: {{song.title}}
        </div>
        <div class="song-artist">
          Artist: {{song.artist}}
        </div>
        <div class="song-genre">
          Song: {{song.genre}}
        </div>
        <img class="album-image" :src="song.albumImage">
        <br/>
        Album: {{song.album}}
        <div class="mt-2">
          <v-btn
            dark
            class="cyan"
            @click="navigateTo({name: 'song-edit', params: {songId: song.id}})">
            Edit
          </v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    props: [
      'song'
    ],
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>
<style scoped>
  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-genre {
    font-size: 18px;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }

  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
  }
</style>
