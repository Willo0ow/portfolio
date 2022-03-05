<template>
  <section-frame id="work" title="My Work">
    <template #content>
      <v-container fluid>
        <v-row fluid>
          <v-col v-for="n in 8" :key="n" class="d-flex child-flex">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  width="200"
                  max-height="200"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <v-btn>See more info</v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-img>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </section-frame>
</template>

<script>
import SectionFrame from "./SectionFrame.vue";
export default {
  components: { SectionFrame },
  name: "MyWorkSection",
  data() {
    return {
      overlay: false,
    };
  },
};
</script>
<style scoped></style>
