<template>
  <section-frame id="skills" title="My Skills">
    <template #content>
      <v-row>
        <v-col>
          <v-list class="transparent" shaped>
            <v-hover
              v-slot="{ hover }"
              v-for="(skill, idx) of skills"
              :key="idx"
            >
              <v-list-item :class="{ 'hovered-item': hover }">
                <v-list-item-avatar>
                  <v-img :src="require(`@/assets/${skill.logo}`)"></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="pl-5">
                  <v-list-item-title class="skill-name">{{
                    skill.label
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="skill-text">{{
                    skill.text
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-hover>
          </v-list>
        </v-col>
      </v-row>
    </template>
  </section-frame>
</template>

<script>
import SectionFrame from "./SectionFrame.vue";
export default {
  name: "MySkillsSection",
  components: { SectionFrame },
  data() {
    return {
      skills: [
        {
          label: "HTML",
          logo: "html.png",
          text: "Some nice description of the skill",
        },
        {
          label: "CSS",
          logo: "css.png",
          text: "Some nice description of the skill",
        },
        {
          label: "JavaScript",
          logo: "js.png",
          text: "Some nice description of the skill",
        },
        {
          label: "PHP",
          logo: "php.jpg",
          text: "Some nice description of the skill",
        },
        {
          label: "MySql",
          logo: "mysql.jpeg",
          text: "Some nice description of the skill",
        },
        {
          label: "VueJs",
          logo: "vue.png",
          text: "Some nice description of the skill",
        },
        {
          label: "Vuetify",
          logo: "vuetify.svg",
          text: "Some nice description of the skill",
        },
        {
          label: "Laravel",
          logo: "laravel.jpg",
          text: "Some nice description of the skill",
        },
      ],
    };
  },
};
</script>
<style scoped>
.skill-name,
.skill-text {
  text-align: start;
}
.hovered-item {
  background: #9d90a657;
}
</style>
