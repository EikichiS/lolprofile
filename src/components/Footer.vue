<template>
  <v-footer
    dark
    padless
    absolute
  >
    <v-card
      flat
      tile
      class="white--text text-center flex"
      color="blue-grey darken-4"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          icon
          href="https://github.com/EikichiS"
        >
          <v-icon size="24px">
            mdi-github
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
          href="https://eikichis.cl"
        >
          <v-icon size="24px">
            mdi-web
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            mdi-linkedin
          </v-icon>
        </v-btn>
      </v-card-text>



      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>EikichiS.cl</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>