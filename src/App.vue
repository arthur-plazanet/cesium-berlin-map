<template>
  <v-app class="justify-center flex-row">
    <v-container class="d-flex align-center">
      <InformationSection :attributes="attributes && attributes" />
      <Map @handleClickOnTile="handleClickOnTile" />
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import InformationSection from './components/InformationSection.vue';
  import Map from './components/Map.vue';
  import { Building } from './types/models';

  const attributes = ref();

  function handleClickOnTile(tileAttributes: Building['attributes']) {
    attributes.value = tileAttributes;
  }
</script>
<style>
  .v-application .v-application__wrap {
    flex-direction: row;
  }
</style>
