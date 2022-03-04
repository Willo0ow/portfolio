<template>
  <v-navigation-drawer permanent app width="180">
    <v-list
      :two-line="itemHeight === 'two-line'"
      :three-line="itemHeight === 'three-line'"
    >
      <v-list-item
        class="d-flex flex-column align-center"
        @click="scrollToSection('#home')"
      >
        <v-avatar height="100" width="100">
          <v-img src="@/assets/author.jpeg"></v-img>
        </v-avatar>
        <div class="text-h6">Dorota Hinc</div>
        <div>Frontend Developer</div>
      </v-list-item>
      <v-divider></v-divider>
      <div v-for="(link, idx) of links" :key="idx">
        <v-list-item @click="scrollToSection(link.target)">
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import scrollToSection from "@/mixins/scrollToSection.js";

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
    itemHeight() {
      if (this.$root.windowHeight > 700) {
        return "three-line";
      }
      return "two-line";
    },
  },
};
</script>
