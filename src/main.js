import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeValidatePlugin from "./includes/validation";

import "./assets/main.css";
import "./assets/base.css";

import { auth } from "./includes/firebase";
// Imagine that the user reload the webpage, he will lost his authentication
// to avoid this probleme we should have to load first the firebase instance then the vue app
//we will check for auth users using the token provided by firebase
//we will listen to the event th
let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App);
    // the use function allow us to register a plugin
    app.use(createPinia()); // THIS
    app.use(router);
    app.use(veeValidatePlugin);
    app.mount("#app");
  }
});
