<template>
  <v-col cols="6" class="d-flex align-center justify-center">
    <v-card title="Building informations" width="600">
      <v-card-text v-if="!attributes">
        <p>Click on a building to see its attributes</p>
      </v-card-text>
      <v-card-text v-if="attributes" class="text-left">
        <p v-for="key in Object.keys(attributes)">
          <BuildingData :label="key" :child="attributes[key]" />
        </p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
  import { Building } from '../types/models';
  import BuildingData from './BuildingData.vue';

  interface Props {
    attributes?: Building['attributes'];
  }

  defineProps<Props>();
</script>

<style scoped></style>
