import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#E7D3CC", //title
        secondary: "#895575", //btns
        ternary: "#1E0233", //nav
        accent: "#FFE066",
        error: "#F25F5C",
      },
    },
  },
});
