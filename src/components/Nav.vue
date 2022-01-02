<template>
  <v-card>
    <v-app-bar color="blue-grey darken-4" dark>
      <v-toolbar-title>LOL Profile</v-toolbar-title>
      <template v-slot:extension>
      <v-tabs centered icons-and-text hide-slider>
        <v-tab class="pb-2"
          :to="{
            name: 'Search',
          }"
          >Buscar<v-icon>mdi-magnify</v-icon></v-tab
        >
      </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>