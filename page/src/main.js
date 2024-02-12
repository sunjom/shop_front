import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";
import Login from "@/pages/login.vue";
import store from "@/scripts/store";
const routes=[
    {path:'/',component:Home},
    {path:'/login',component:Login}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).use(store).mount('#app')

