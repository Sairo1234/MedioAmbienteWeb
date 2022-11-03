import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import dayjs from 'dayjs'

//import 'primeflex/primeflex.css' 
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';


// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia) //pinia stores
app.use(VueAxios, axios)
app.use(PrimeVue); //primevue components
app.config.globalProperties.$dayjs = dayjs // agregamos dayjs globalmente para poder formatear las fechas en cualquier componente

app.component("PrimeInputText", InputText)
app.component("PrimeButton", Button)

app.mount('#app')
