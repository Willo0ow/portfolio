import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setActiveSection"]),
    scrollToSection(sectionId) {
      this.setActiveSection(sectionId);
      this.$vuetify.goTo(sectionId, { duration: 1000 });
    },
  },
};
