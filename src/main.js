import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
// import Vuelidate from '@vuelidate/core';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
// app.use(Vuelidate);
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
