import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#247BA0",
        secondary: "#FFE066",
        accent: "#70C1B3",
        error: "#F25F5C",
      },
    },
  },
});
