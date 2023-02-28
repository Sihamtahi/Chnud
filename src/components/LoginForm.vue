<template>
  <div
    class="text-white text-center font-bold p-4 mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_message }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
        type="password"
      >
      </vee-field>
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";
export default {
  name: "LoginForm",
  data() {
    return {
      loginSchema: {
        email: "required|min:3|max:100|email",
        password: "required|min:8|max:100",
      },
      login_in_submission: false, //disable the button while the form is submetting the data
      login_show_alert: false, //toggle the alert visibility
      login_alert_variant: "bg-blue-500",
      login_alert_message: "Please wait ! We are logging you in.", // the message inside the alert
    };
  },
  methods: {
    ...mapActions(useUserStore, ["authenticate"]),
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = "bg-blue-500";
      this.login_alert_message = "Please wait ! We are logging you in.";

      try {
        await this.authenticate(values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = "bg-red-500";
        this.login_alert_message = "Invalid Login details.";
        return; 
      }

      this.login_alert_variant = "bg-green-500";
      this.login_alert_message = "Sucess ! You are now Logged in";

      console.log(values);
    },
  },
};
</script>
