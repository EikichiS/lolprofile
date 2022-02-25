<template>
  <v-card color="grey lighten-4" tile>
    <v-toolbar dense dark>
      <v-toolbar-title v-ripple @click="$router.push('/')">League Of Legends Profile</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      region: "",
      summonerName: "",
      items: [
        { tag: "BR", name: "BRAZIL" },
        { tag: "EUNE", name: "EUROPE_NORTH_EAST" },
        { tag: "EUW", name: "EUROPE_WEST" },
        { tag: "JP", name: "JAPAN" },
        { tag: "KR", name: "KOREA" },
        { tag: "LAN", name: "LATIN_AMERICA_NORTH" },
        { tag: "LAS", name: "LATIN_AMERICA_SOUTH" },
        { tag: "NA", name: "NORTH_AMERICA" },
        { tag: "OCE", name: "OCEANIA" },
        { tag: "RU", name: "RUSSIA" },
        { tag: "TR", name: "TURKEY" },
      ],
      summoner: {},
    };
  },
};
</script>

<style>
</style>