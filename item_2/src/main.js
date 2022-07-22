import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import '@/assets/font/iconfont.css';

import api from './api/index.js';
const app = createApp(App);
app.config.globalProperties.$http = api;
app.use(store).use(router).use(ElementPlus).mount('#app')

