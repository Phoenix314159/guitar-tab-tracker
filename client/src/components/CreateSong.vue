<template>
  <div>
    <v-layout>
      <v-flex xs8>
        <panel title="Create Song" class="createSong">
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
      <v-flex xs8>
        <panel title="Song Structure" class="structure">
          <v-text-field
            label="Tab"
            multi-line
            v-model="tab"
          ></v-text-field>
          <v-text-field
            label="Lyrics"
            multi-line
            v-model="lyrics"
          ></v-text-field>
          <br/>
          <br/>
          <button class="btn btn-primary" @click="addSong">Add Song</button>
          <router-link to="/">
            <button class="btn btn-danger">Cancel</button>
          </router-link>
        </panel>
      </v-flex>
    </v-layout>
  </div>
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
</script>

<style scoped>
  .createSong {
    width: 35vw;
  }
  .structure {
    width: 44vw;
    margin-right: 6vw;
  }
</style>
