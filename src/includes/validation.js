import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
// ISLINT will throw an error if  we are using alpha_spaces, we need to have camel case rendering
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("password_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required.`,
          min: `the field ${ctx.field} is too short.`,
          max: `the field ${ctx.field} is too long.`,
          alpha_spaces: `the field ${ctx.field} may only contain alphabetical characters and spaces.`,
          mail: `the field ${ctx.field} must a valid email.`,
          min: `the field ${ctx.field} is too short.`,
          min_value: `the field ${ctx.field} is too low.`,
          max_value: `the field ${ctx.field} is too hight.`,
          excluded: `You are notalloxed to use this value for the field ${ctx.field}.`,
          country_excluded: `Due to the restrictions, we don't accep^t the users from this location.`,
          password_mismatch: `The password don't match.`,
          tos: `You must accept the terms of service.`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid.`;
        return message;
      },
    });
  },
};
