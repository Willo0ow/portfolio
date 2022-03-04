<template>
  <v-app v-resize="onResize">
    <navigation-side-bar></navigation-side-bar>
    <v-main>
      <home-section></home-section>
      <me-section />
      <my-skills-section></my-skills-section>
      <my-work-section></my-work-section>
      <contact-section></contact-section>
    </v-main>
  </v-app>
</template>

<script>
import MeSection from "./components/MeSection.vue";
import NavigationSideBar from "./components/NavigationSideBar.vue";
import MyWorkSection from "./components/MyWorkSection.vue";
import ContactSection from "./components/ContactSection.vue";
import MySkillsSection from "./components/MySkillsSection.vue";
import HomeSection from "./components/HomeSection.vue";

export default {
  name: "App",
  components: {
    MeSection,
    MyWorkSection,
    ContactSection,
    MySkillsSection,
    HomeSection,
    NavigationSideBar,
  },
  methods: {
    onResize() {
      this.$root.windowHeight = window.innerHeight;
      this.$vuetify.goTo(this.$store.state.activeSection, { duration: 1000 });
    },
  },
};
</script>

<style>
body {
  background: #121212;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
