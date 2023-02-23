import { defineStore } from "pinia";
import { auth, userCollection } from "@/includes/firebase";
export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(values.email, values.password);
      await userCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        job: values.job,
      });
      this.userLoggedIn = true;
    },
  },
});
