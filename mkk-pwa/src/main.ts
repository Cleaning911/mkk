import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import './style.css'
import App from './App.vue'
import { routes } from "./routes.ts"
import { createPinia } from "pinia"
import PinInput from "v-pin-input"

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(PinInput).mount('#app')
