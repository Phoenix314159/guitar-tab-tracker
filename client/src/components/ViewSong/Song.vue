<template>
  <v-layout>
    <v-flex xs6>
      <song-meta-data :song="song"/>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <you-tube :youtubeid="song.youtubeid"/>
    </v-flex>
    <v-flex xs6>
      <!--<panel title="Youtube Video">-->

      <!--</panel>-->
    </v-flex>
  </v-layout>
</template>
<script>
  import panel from '../../components/Panel'
  import YouTube from './Youtube'
  import SongMetaData from './SongMetaData'
  export default {
    components: {
      panel,
      SongMetaData,
      YouTube
    },
    data () {
      return {
        song: {}
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
</style>
