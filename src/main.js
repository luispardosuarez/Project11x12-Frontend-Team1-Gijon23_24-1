import '@vuepic/vue-datepicker/dist/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/main.scss';

import 'bootstrap/dist/css/bootstrap.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
