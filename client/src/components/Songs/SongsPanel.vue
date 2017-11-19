<template>
  <panel title="Songs">
        <v-btn
          fab
          light
          medium
          absolute
          right
          middle
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          class="cyan accent-2">
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.title" class="song">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
                dark
                class="cyan"
                @click="navigateTo({name: 'song', params: {songId: song.id}})">
                View
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImage">
            </v-flex>
          </v-layout>
        </div>
      </panel>
</template>
<script>
  import songsService from '../../services/songs'
  export default {
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
  .song {
    padding: 20px;
    height:330px;
    overflow: hidden;
  }
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
</style>
