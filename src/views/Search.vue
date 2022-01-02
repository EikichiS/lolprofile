<template> 
  <v-container fluid class="pa-5 body-color">
    <v-card class="mx-auto my-12 px-12 py-5"  
      ><v-form ref="form" lazy-validation>
        <v-row class="text-right" align="center">
          <v-col cols="4">
            <v-text-field
              v-model="summonerName"
              label="Nombre de Invocador"
              placeholder="ingresa tu nombre invocador"
              :rules="[required('Nombre de Invocador')]"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="4">
            <v-select
              v-model="region"
              :items="items"
              item-text="tag"
              item-value="name"
              label="Región"
              persistent-hint
              return-object
              required
              :rules="[(v) => !!v || 'Tienes que elegir una region']"
              color="#FFFFFF"
            ></v-select>
          </v-col>
          <v-col>
            <v-btn
              block
              depressed
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
    </v-card>
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
