import { createApp } from 'vue'
import { createPinia } from 'pinia' 

import App from 'app/App.vue'
import router from 'app/Router';

import 'normalize.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router)

app.mount('#app');
