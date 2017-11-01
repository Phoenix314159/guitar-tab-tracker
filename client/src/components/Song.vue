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
      </panel>
    </v-flex>
    <v-flex>
      <panel>

      </panel>
    </v-flex>
    <v-flex xs6>
      <panel title="Tabs" class="ml-2">
        <textarea
          readonly
          v-model="song.tab"
        ></textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
  import songsService from '../services/songs'
  import panel from '../components/Panel'
  export default {
    components: {
      panel
    },
    data () {
      return {
        song: {}
      }
    },
    mounted () {
      const songId = this.$store.state.route.params.songId
      songsService.show(songId).then(res => {
        const {data: {song}} = res
        this.song = song[0]
      })
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
