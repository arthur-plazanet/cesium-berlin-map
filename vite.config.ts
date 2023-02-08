import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const cesiumSource = 'node_modules/cesium/Build/Cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: `${cesiumSource}/Workers`,
          // dest: 'static/Cesium/',
          dest: '',
        },
        {
          src: `${cesiumSource}/ThirdParty`,
          dest: '',
        },
        {
          src: `${cesiumSource}/Assets`,
          dest: '',
        },
        {
          src: `${cesiumSource}/Widgets`,
          dest: '',
        },
      ],
    }),
  ],
  // define: {
  //   CESIUM_BASE_URL: '/',
  // },
});
