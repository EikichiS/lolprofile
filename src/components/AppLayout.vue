<template>
  <v-app class="" >
    <navbars />
    <router-view />
    <footers />
  </v-app>
</template>

<script>
import navbars from "../components/Nav.vue";
import footers from "../components/Footer.vue"
export default {
  components: {
    navbars,
    footers,
  },
};
</script>

<style>
</style>