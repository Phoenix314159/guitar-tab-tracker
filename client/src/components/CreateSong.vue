<template>
  <v-layout column class="total">
    <v-flex xs6 offset-xs3>
      <panel title="Create Song">
        <v-text-field
          label="Title"
          v-model="title"
        ></v-text-field>
        <v-text-field
          label="Artist"
          v-model="artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          v-model="genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          v-model="album"
        ></v-text-field>
        <v-text-field
          label="Album Image"
          v-model="albumImage"
        ></v-text-field>
        <v-text-field
          label="Youtube Id"
          v-model="youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import songsService from '../services/songs'
  import panel from './Panel'
  export default {
    components: {
      panel
    },
    data () {
      return {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    },
    methods: {
      methods: {
        addSong () {
          songsService.addSong({
            title: this.title,
            artist: this.artist,
            genre: this.genre,
            album: this.album,
            albumImage: this.albumImage,
            youtubeId: this.youtubeId,
            lyrics: this.lyrics,
            tab: this.tab
          }).then(res => {
            console.log(res)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: center;
  }

  .total {

  }

  .button1 {
    width: 50%;
  }

</style>
