<template>
  <div class="white elevation-2 total">
    <v-toolbar flat dense class="cyan">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action"/>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'title'
    ]
  }
</script>

<style scoped>
.total{
  height:400px;
}
</style>
