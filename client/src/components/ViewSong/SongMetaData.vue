<template>
  <v-layout>
    <v-flex>
      <panel title="Song Data">
        <div class="left">
          <div class="song-title">
            Title: {{song.title}}
          </div>
          <div class="song-artist">
            Artist: {{song.artist}}
          </div>
          <div class="song-genre">
            Song: {{song.genre}}
          </div>
        </div>
        <div class="mt-2">
          <img class="album-image" :src="song.albumImage">
          Album: {{song.album}}
        </div>
        <div class="flexButton">
          <div>
            <v-btn
              dark
              class="cyan"
              @click="navigateTo({name: 'song-edit', params: {songId: song.id}})">
              Edit
            </v-btn>
          </div>
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

  .left {
    text-align: left;
  }

  .flexButton {
    display: flex;
    justify-content: center;
    margin-top: 230px;
  }

</style>
