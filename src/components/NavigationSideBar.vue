<template>
  <v-app-bar app>
    <v-toolbar-title @click="scrollToSection('#home')">
      <v-img
        max-height="70"
        contain
        src="@/assets/willo0ow_logotyp_small.png"
      ></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      @click="scrollToSection(link.target)"
      v-for="(link, idx) of links"
      :key="idx"
      :plain="!checkIfSectionActive(link.target)"
      :outlined="checkIfSectionActive(link.target)"
      >{{ link.text }}</v-btn
    >
  </v-app-bar>
</template>
<script>
import scrollToSection from "@/mixins/scrollToSection.js";
import { mapState } from "vuex";

export default {
  name: "NavigationSideBar",
  mixins: [scrollToSection],
  data() {
    return {
      links: [
        { text: "Me", target: "#me" },
        { text: "My skills", target: "#skills" },
        { text: "My work", target: "#work" },
        { text: "Contact", target: "#contact" },
      ],
    };
  },
  computed: {
    ...mapState({
      activeSection: (state) => state.activeSection,
    }),
    itemHeight() {
      if (this.$root.windowHeight > 700) {
        return "three-line";
      }
      return "two-line";
    },
  },
  methods: {
    checkIfSectionActive(sectionTarget) {
      return this.activeSection === sectionTarget;
    },
  },
};
</script>
