<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-meta-data :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeid"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song"></tab>
      </v-flex>
      <v-flex xs6>
        <lyrics :song="song"></lyrics>
      </v-flex>
    </v-layout>
  </div>

</template>
<script>
  import panel from '../../components/Panel'
  import YouTube from './Youtube'
  import Lyrics from './Lyrics'
  import Tab from './Tab'
  import SongMetaData from './SongMetaData'
  import songsService from '../../services/songs'
  export default {
    components: {
      panel,
      SongMetaData,
      YouTube,
      Lyrics,
      Tab
    },
    data () {
      return {
        song: {}
      }
    },
    mounted () {
      const {route: {params: {songId}}} = this.$store.state
      songsService.show(songId).then(res => {
        const {data: {song}} = res
        this.song = song[0]
      })
    }
  }
</script>
<style scoped>
</style>
