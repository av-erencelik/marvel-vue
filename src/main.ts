import './assets/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.use(pinia)
app.mount('#app')
