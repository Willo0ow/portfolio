<template>
  <section-frame id="home">
    <template #content>
      <div class="main-title">
        I'm Dorota, <br />
        Frontend Developer,<br />
        ...and more
      </div>
      <v-btn
        style="max-width: 300px"
        @click="scrollToSection('#contact')"
        x-large
        color="primary"
        outlined
        >Contact me</v-btn
      >
    </template>
  </section-frame>
</template>

<script>
import SectionFrame from "./SectionFrame.vue";
import scrollToSection from "@/mixins/scrollToSection.js";

export default {
  components: { SectionFrame },
  mixins: [scrollToSection],
  name: "HomeSection",
};
</script>
<style scoped>
.main-title {
  font-size: 4rem;
  font-weight: 700;
  text-align: start;
  margin-bottom: 20px;
}
</style>
