import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import Login from "./components/Login.vue"
import Dashboard from "./components/Dashboard.vue"

import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia';
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp({
    components:{
        Login,Dashboard
    }
})


app.use(pinia).use(router).mount('#app')