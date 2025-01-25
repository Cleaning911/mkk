import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import './style.css'
import App from './App.vue'
import { routes } from "./routes.ts"
import { createPinia } from "pinia"
import PinInput from "v-pin-input"
// import LightGallery from 'vue-light-gallery'
//import VueGallerySlideshow from 'vue-gallery-slideshow';
// import VueLazyLoad from 'vue-lazyload'
// import Camera from "simple-vue-camera";

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(PinInput).mount('#app')
