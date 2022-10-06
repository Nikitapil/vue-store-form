import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/styles/nullstyle.scss';
import './assets/styles/App.scss';
import Maska from 'maska';
import { setValidation } from '@/plugins/validation';

// @ts-ignore
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Maska);
app.use(setValidation);
app.mount('#app');
