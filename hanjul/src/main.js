import { createApp } from 'vue'
import App from './App.vue'
<<<<<<< HEAD

createApp(App).mount('#app')
=======
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
let app = createApp(App);
import store from'./store.js'
app.use(store).mount('#app')
>>>>>>> be77dbf87d049e4f7b698d85b46786058c1c1f4a
