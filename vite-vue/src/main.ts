import {createApp} from 'vue';
import App from './App.vue';
import {sayHello} from 'vite-library';

// const App = defineAsyncComponent(() => import('./App.vue'));

createApp(App).mount('#app');

sayHello();
