<template>
  <section-frame id="contact" title="Contact me">
    <template #content>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit" style="max-width: 700px">
          <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:10"
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :error-messages="errors"
              label="Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Subject"
            rules="required|min:5"
          >
            <v-text-field
              v-model="subject"
              label="Subject"
              :error-messages="errors"
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Message"
            rules="required|min:10"
          >
            <v-textarea
              v-model="message"
              label="Message"
              :error-messages="errors"
            ></v-textarea>
          </validation-provider>

          <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
            color="secondary"
          >
            Send the message
          </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </form>
      </validation-observer>
    </template>
  </section-frame>
</template>

<script>
import SectionFrame from "./SectionFrame.vue";
import { required, email, max, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("min", {
  ...min,
  message: "{_field_} must contain at least {length} characters",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  components: { SectionFrame, ValidationProvider, ValidationObserver },
  name: "ContactSection",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      this.clear();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
      this.$refs.observer.reset();
    },
  },
};
</script>
<style scoped></style>
