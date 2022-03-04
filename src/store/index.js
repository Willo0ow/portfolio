import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSection: "#home",
  },
  mutations: {
    setActiveSection(state, activeSection) {
      state.activeSection = activeSection;
    },
  },
  actions: {},
  modules: {},
});
