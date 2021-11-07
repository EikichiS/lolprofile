<template>
  <div>
    <Loader :visible="isLoading" />
    <div v-if="advice" class="justify-center">
      <v-alert dense type="error" class="text-center"
        >El invocador ingresado no existe</v-alert
      >
    </div>
    <v-card class="position-relative profile-card mb-7" v-if="succesfull">
      <v-card-text class="pa-5">
        <div class="text-center">
          <img
            :src="summoner.profileIconUrl"
            alt="user"
            class="rounded-circle"
            width="100"
          />
          <h2 class="font-weight-regular">{{ summoner.name }}</h2>
          <h6 class="op-5 font-weight-regular">Level {{ summoner.level }}</h6>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import summonerService from "@/services/summonerService";
import Loader from "@/components/Loader";
export default {
  name: "Profile",

  components: {
    Loader,
  },

  data: () => ({
    summoner: {},
    isLoading: true,
    advice: false,
    succesfull: false,
  }),

  created: function () {
    this.name = this.$route.params.name;
    this.region = this.$route.params.region;
    this.getProfile(this.name, this.region);
  },

  methods: {
    getProfile: function (name, region) {
      summonerService
        .getProfile(name, region)
        .then(
          (summoner) => ((this.summoner = summoner), (this.succesfull = true))
        )
        .catch((err) => {
          if (err.response.status === 400) {
            this.isLoading = false;
            this.advice = true;
          }
        })
        .then(() => (this.isLoading = false));
    },
  },
};
</script>

<style>
</style>