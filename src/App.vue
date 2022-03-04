<template>
  <v-app>
    <v-navigation-drawer permanent app>
      <v-list>
        <v-list-item class="d-flex flex-column align-center">
          <v-avatar height="100" width="100">
            <v-img src="@/assets/author.jpeg"></v-img>
          </v-avatar>
          <div class="text-h6">Dorota Hinc</div>
          <div>Frontend Developer</div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
