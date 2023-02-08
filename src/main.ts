import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

declare global {
  interface Window {
    CESIUM_BASE_URL: string;
  }
}

const vuetify = createVuetify({
  components,
  directives,
});

window.CESIUM_BASE_URL = '/';

createApp(App).use(vuetify).mount('#app');
