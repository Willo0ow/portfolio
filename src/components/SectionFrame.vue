<template>
  <v-card :height="$root.windowHeight" min-height="300" class="ma-5" :id="id">
    <slot name="content"></slot>
  </v-card>
</template>

<script>
export default {
  name: "SectionFrame",
  props: {
    id: { type: String, required: true },
  },
};
</script>
<style scoped></style>
