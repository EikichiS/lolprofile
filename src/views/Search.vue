<template> 
  <v-container fluid class="pa-5 body-color">
    <v-form ref="form"  lazy-validation>
        <v-row align="end">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="summonerName"
              label="Nombre de Invocador"
              placeholder="ingresa tu nombre invocador"
              :rules="[(v) => !!v || 'Ingresa tu nombre de invocador']"
              solo
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="region"
              :items="items"
              item-text="tag"
              item-value="name"
              label="Región"
              persistent-hint
              return-object
              required
              solo
              :rules="[(v) => !!v || 'Tienes que elegir una region']"
              color="#FFFFFF"
            ></v-select>
          </v-col>
          <v-col align-self="start">
            <v-btn
              block
              depressed
              large
              elevation="2"
              color="#0288D1"
              style=" color:#FFFFFF;"
              @click="buscar(summonerName, region.name)"
            >
              Buscar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
  </v-container>
</template>

<script>
import ValidatorsService from "@/services/validatorsService";
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
  methods: {
    required: (propertyType) => ValidatorsService.required(propertyType),
    buscar(summonerName, region) {
      if (this.$refs.form.validate()) {
        this.$router.push({
          name: "Profile",
          params: { name: summonerName, region: region },
        });
      }
    },
  },
};
</script>

<style>
</style>
