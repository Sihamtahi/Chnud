import { defineStore } from "pinia";
import { auth, userCollection } from "@/includes/firebase";
export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      // We have to link the user data with user entity.
      // ie : linking the created user ( Email and Password )
      // Here we need to match the document of a user with his UID, it's like a matching key
      await userCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        job: values.job,
      });
      await userCred.user.updateProfile({
        displayName: values.name,
        //we can add also a profile image
      });

      this.userLoggedIn = true;
    },
  },
});
