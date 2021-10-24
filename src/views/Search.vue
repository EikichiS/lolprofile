<template>
  <v-container fluid class="pa-5">
    <v-row align="center">
      <v-col cols="4">
        <v-text-field
          v-model="summonerName"
          label="Nombre de Invocador"
          placeholder="ingresa tu nombre invocador"
        ></v-text-field>
      </v-col>

      <v-col cols="2">
        <v-select
          v-model="region"
          :items="items"
          item-text="tag"
          item-value="name"
          label="Select"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
      <v-col cols="">
        <v-btn small depressed elevation="2" outlined :to="{
                  name: 'Profile',
                  params: { name: summonerName, region: region.name },
                }"> Buscar </v-btn>
      </v-col>
    </v-row>
    <perfil summoner="summoner"/>
  </v-container>
</template>

<script>
export default {
  name: "Search",

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
