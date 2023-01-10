import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
let app = createApp(App);
import store from'./store.js'
app.use(store).mount('#app')