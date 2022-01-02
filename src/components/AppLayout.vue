<template>
  <v-app class="" >
    <navbars />
    <router-view />
  </v-app>
</template>

<script>
import navbars from "../components/Nav.vue";
export default {
  components: {
    navbars,
  },
};
</script>

<style>
</style>