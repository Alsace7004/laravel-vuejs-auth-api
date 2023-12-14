import './bootstrap';

import { createApp } from 'vue';
import router from './router';

import App from './App.vue'; // Import App component

import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia';
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)


app.use(pinia).use(router).mount('#app')