import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import dayjs from 'dayjs'



const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia) //pinia stores
app.use(VueAxios, axios)
app.config.globalProperties.$dayjs = dayjs // agregamos dayjs globalmente para poder formatear las fechas en cualquier componente

app.mount('#app')
