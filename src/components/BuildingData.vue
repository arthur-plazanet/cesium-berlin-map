<template>
  <div class="pl-6">
    <div v-if="!hasChildren">
      <p>
        <span class="font-weight-bold">
          {{ label }}
        </span>
        : {{ child }}
      </p>
    </div>

    <div v-if="hasChildren">
      <span class="font-weight-bold">
        {{ label }}
      </span>
      :
      <BuildingData
        v-for="key in Object.keys(props.child)"
        :label="key"
        :child="props.child[key]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  interface Props {
    label: string;
    child: string | number | object;
  }

  const props = defineProps<Props>();

  const hasChildren = computed(() => typeof props.child === 'object');
</script>
