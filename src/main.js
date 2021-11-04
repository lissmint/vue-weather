import { createApp } from 'vue';
import App from './App.vue';
import '@/style/index.css';
import api from '@/plugins/api';

const app = createApp(App);

app.config.globalProperties.$api = api;

app.mount('#app');
