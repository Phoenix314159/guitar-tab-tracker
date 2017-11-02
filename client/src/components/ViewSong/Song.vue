<template>
  <v-layout class="total">
    <v-flex xs6>
      <song-meta-data :song="song"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeid"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <lyrics :song="song"/>
    </v-flex>
  </v-layout>
</template>
<script>
  import panel from '../../components/Panel'
  import YouTube from './Youtube'
  import Lyrics from './Lyrics'
  import SongMetaData from './SongMetaData'
  import songsService from '../../services/songs'
  export default {
    components: {
      panel,
      SongMetaData,
      YouTube,
      Lyrics
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
  .total {
    /*width: 145vw;*/
  }
</style>
