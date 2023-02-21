import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeValidatePlugin from "./includes/validation";

import "./assets/main.css";
import "./assets/base.css";

import "./includes/firebase";

const app = createApp(App);
// the use function allow us to register a plugin
app.use(createPinia()); // THIS
app.use(router);
app.use(veeValidatePlugin);

app.mount("#app");
