<template>
<v-card class="position-relative profile-card mb-7">
          <v-card-text class="pa-5">
            <div class="text-center">
              <img
                :src='summoner.profileIconUrl'
                alt="user"
                class="rounded-circle"
                width="100"
              />
              <h2 class="font-weight-regular">{{ summoner.name }}</h2>
              <h6 class="op-5 font-weight-regular">Level {{ summoner.level }}</h6>
            </div>
          </v-card-text>
        </v-card>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    summoner: {},
  }),

  created: function () {
    this.name = this.$route.params.name;
    this.region = this.$route.params.region;
  },
  async mounted() {
    const res = await fetch(
      "https://lolapieikichis.herokuapp.com/summoner/" + this.name + "/" + this.region
    );
    const data = await res.json();
    this.summoner = data;
    console.log(this.summoner);
  },
};
</script>

<style>
</style>