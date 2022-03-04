<template>
  <section-frame id="me">
    <template #content>
      <v-card-text>Me</v-card-text>
    </template>
  </section-frame>
</template>

<script>
import SectionFrame from "./SectionFrame.vue";
export default {
  components: { SectionFrame },
  name: "MeSection",
};
</script>
<style scoped></style>
