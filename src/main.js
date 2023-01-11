import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/base.css";

const app = createApp(App);
// the use function allow us to register a plugin
app.use(createPinia()); // THIS
app.use(router);

app.mount("#app");
