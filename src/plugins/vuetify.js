import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#70C1B3",
        secondary: "#247BA0",
        accent: "#FFE066",
        error: "#F25F5C",
      },
    },
  },
});
