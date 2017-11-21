<template>
  <v-layout class="mr-2">
    <v-flex>
      <panel title="Tabs">
        <textarea
          readonly
          v-model="song.tab"
        ></textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
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
    height: 300px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
  }
</style>
