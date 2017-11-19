<template>
  <v-layout>
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
  import panel from '../../components/Panel'
  export default {
    components: {
      panel
    },
    props: [
      'song'
    ]
  }
</script>
<style scoped>
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
