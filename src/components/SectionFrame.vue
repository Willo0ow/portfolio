<template>
  <v-container
    :style="{ height: `${$root.windowHeight}px`, 'min-height': '300px' }"
    class="ma-5 d-flex flex-column justify-center"
    :id="id"
    @mouseenter="setActiveSection(`#${id}`)"
  >
    <slot name="content"></slot>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SectionFrame",
  props: {
    id: { type: String, required: true },
  },
  methods: {
    ...mapMutations(["setActiveSection"]),
  },
};
</script>
