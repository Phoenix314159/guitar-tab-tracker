<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <panel title="Create Song" class="createSong">
          <v-text-field
            label="Title"
            required
            :rules="[required]"
            v-model="song.title"
          ></v-text-field>
          <v-text-field
            label="Artist"
            required
            :rules="[required]"
            v-model="song.artist"
          ></v-text-field>
          <v-text-field
            label="Genre"
            required
            :rules="[required]"
            v-model="song.genre"
          ></v-text-field>
          <v-text-field
            label="Album"
            required
            :rules="[required]"
            v-model="song.album"
          ></v-text-field>
          <v-text-field
            label="Album Image"
            required
            :rules="[required]"
            v-model="song.albumImage"
          ></v-text-field>
          <v-text-field
            label="Youtube Id"
            required
            :rules="[required]"
            v-model="song.youtubeId"
          ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs10>
        <panel title="Song Structure" class="structure">
          <v-text-field
            label="Tab"
            required
            :rules="[required]"
            multi-line
            v-model="song.tab"
          ></v-text-field>
          <v-text-field
            label="Lyrics"
            required
            :rules="[required]"
            multi-line
            v-model="song.lyrics"
          ></v-text-field>
          <br/>
          <br/>
          <div class="error1" v-if="error">
            {{error}}
          </div>
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
        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImage: null,
          youtubeId: null,
          lyrics: null,
          tab: null
        },
        error: null,
        required: value => !!value || 'Required.'
      }
    },
    methods: {
      addSong () {
        this.error = null
        const allFields = Object.keys(this.song).every(key => !!this.song[key])
        if (!allFields) {
          this.error = 'Please fill in all the required fields'
          return
        }
        songsService.addSong({
          title: this.song.title,
          artist: this.song.artist,
          genre: this.song.genre,
          album: this.song.album,
          albumImage: this.song.albumImage,
          youtubeId: this.song.youtubeId,
          lyrics: this.song.lyrics,
          tab: this.song.tab
        }).then(res => {
          this.$router.push({name: 'songs'})
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .createSong {
    width: 35vw;
    margin-bottom: 15vh;
    margin-left: 7vw;
  }

  .structure {
    width: 44vw;
    margin-left: 4vw;
  }

  .error1 {
    color: red;
  }

</style>
