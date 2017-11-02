<template>
 <panel title="YouTube Video">
   <youtube
     :video-id="youtubeId"
     :player-width="700"
     :player-height="330"
   ></youtube>
 </panel>
</template>
<script>
  import panel from '../Panel'
  import VueYouTubeEmbed from 'vue-youtube-embed'
  export default {
    props: [
      'youtubeId'
    ],
    components: {
      panel,
      VueYouTubeEmbed
    }
  }
</script>
<style scoped>
</style>
