import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  vuetify,

  data: {
    windowHeight: 0,
  },

  beforeMount() {
    this.windowHeight = window.innerHeight;
  },

  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },

  store,
  render: (h) => h(App),
}).$mount("#app");
