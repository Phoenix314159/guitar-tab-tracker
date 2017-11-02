<template>
 <panel title="YouTube Video">
   {{youtubeid}}
 </panel>
</template>
<script>
  import panel from '../Panel'
  export default {
    props: [
      'youtubeid'
    ],
    components: {
      panel
    }
  }
</script>

<style scoped>

</style>
