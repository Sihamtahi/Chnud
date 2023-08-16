import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";
import useUserStore from "@/stores/user";
//sould see section 12, video 2 createWebHistory
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    alias: "/manage",
    path: "/manage-music",
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log("Manage route Guard");
      next();
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    // to redirect user to the home page whatever
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //history API to handle the navigation inside the docuement.
  routes,
  //ici on définit les classes actives dans le code
  linkExactActiveClass: "text-yellow-500",
});
router.beforeEach((to, from, next) => {
  console.log(to.meta);
  //like going to Manage Page  from Home Page
  //but we need to check if the user is
  // to where the user is navigating to
  //from  where the user is navigating from
  //
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  //composant global qui prend la place de befor
  const store = useUserStore();
  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
