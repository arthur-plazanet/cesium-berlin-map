<template>
  <v-col cols="6"><div id="cesiumContainer"></div></v-col>
</template>

<script setup lang="ts">
  import * as Cesium from 'cesium';
  import 'cesium/Build/Cesium/Widgets/widgets.css';
  import { onMounted, ref } from 'vue';
  import { Building } from '../types/models';

  const viewer = ref<Cesium.Viewer>();

  const handler = ref();

  const emit = defineEmits<{
    (e: 'handleClickOnTile', tile: Building['attributes']): void;
  }>();

  onMounted(async () => {
    viewer.value = new Cesium.Viewer('cesiumContainer');

    // remove sandbox error in console
    viewer.value.infoBox.frame.removeAttribute('sandbox');
    viewer.value.infoBox.frame.src = 'about:blank';

    const terrain = await new Cesium.CesiumTerrainProvider({
      url: 'https://www.virtualcitymap.de/datasource-data/globalterrain_5_9',
    });

    viewer.value.terrainProvider = terrain;

    const newBuildingTileset = viewer.value.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: 'https://www.virtualcitymap.de/datasource-data/f892f6af-180a-4eef-917f-5ff03c260b32/tileset.json',
      })
    );

    handler.value = new Cesium.ScreenSpaceEventHandler(viewer.value?.canvas);

    handler.value.setInputAction(function (movement) {
      const feature = viewer.value?.scene.pick(movement.position);
      if (!Cesium.defined(feature)) {
        return;
      }
      emit('handleClickOnTile', feature.getProperty('attributes'));
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    viewer.value.flyTo(newBuildingTileset);
  });
</script>
