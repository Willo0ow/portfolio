<template>
  <v-container
    :style="{
      height: `${$root.windowHeight - 64}px`,
      'min-height': '300px',
    }"
    class="pa-5 d-flex flex-column justify-center"
    :id="id"
    @mouseenter="setActiveSection(`#${id}`)"
  >
    <div>
      <v-row v-if="title">
        <v-col>
          <h2 class="section-title">{{ title }}</h2>
        </v-col>
      </v-row>
      <slot name="content"></slot>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SectionFrame",
  props: {
    id: { type: String, required: true },
    title: { type: String, default: "" },
  },
  methods: {
    ...mapMutations(["setActiveSection"]),
  },
};
</script>
<style>
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: start;
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>
