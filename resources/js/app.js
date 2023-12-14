import './bootstrap';

import { createApp } from 'vue';
import router from './router';

import App from './App.vue'; // Import App component

/*************PINIA-CONFIG-BEGIN*************************/
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia';
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

/*************SWEET-ALERT-2-CONFIG-BEGIN*************************/
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css"
window.Swal = Swal
/*************SWEET-ALERT-2-CONFIG-END***************************/

const app = createApp(App)


app.use(pinia).use(router).mount('#app')