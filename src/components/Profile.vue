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
    <v-row justify="center" v-if="match">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="match in matches" :key="match.info">
          <v-expansion-panel-header>{{
            match.info.gameId
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-item-group active-class="primary">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-item>
                      <v-card  class="mx-auto" :color="match.info.teams[0].win ? '#B2EBF2' : '#FFCDD2'">
                         <v-subheader inset>{{ match.info.teams[0].win ? "Victoria" : "Derrota" }}</v-subheader>
                      
                        <v-list-item
                          v-for="participant in match.info.participants.filter(
                            (e) => e.teamId == 100
                          )"
                          :key="participant.summonerId"
                        >
                          <v-list-item-avatar>
                            <v-img
                              :src="
                                'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/' +
                                participant.championName +
                                '.png'
                              "
                            ></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title
                              v-html="participant.summonerName"
                            ></v-list-item-title>
                            <v-list-item-subtitle>
                              Daño
                              <strong>{{
                                Math.ceil(participant.totalDamageDealtToChampions)
                              }}</strong>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action> </v-list-item-action>
                        </v-list-item>
                      </v-card>
                    </v-item>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-item>
                      <v-card class="mx-auto" :color="match.info.teams[1].win ? '#B2EBF2' : '#FFCDD2'">
                         <v-subheader inset>{{ match.info.teams[1].win ? "Victoria" : "Derrota" }}</v-subheader>
                        <v-list-item
                          v-for="participant in match.info.participants.filter(
                            (e) => e.teamId == 200
                          )"
                          :key="participant.summonerId"
                        >
                          <v-list-item-avatar>
                            <v-img
                              :src="
                                'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/' +
                                participant.championName +
                                '.png'
                              "
                            ></v-img>
                          </v-list-item-avatar>

                          <v-list-item-content>
                            <v-list-item-title
                              v-html="participant.summonerName"
                            ></v-list-item-title>
                            <v-list-item-subtitle>
                              Daño
                              <strong>{{
                                Math.ceil(participant.totalDamageDealtToChampions)
                              }}</strong>
                            </v-list-item-subtitle>
                           
                          </v-list-item-content>
                            <v-list-item-action> </v-list-item-action>
                        </v-list-item>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import summonerService from "@/services/summonerService";
import matchService from "@/services/matchService";
import Loader from "@/components/Loader";
export default {
  name: "Profile",

  components: {
    Loader,
  },

  data: () => ({
    summoner: {},
    matches: [],
    myMatchs: [],
    isLoading: true,
    advice: false,
    match: false,
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
          (summoner) => (
            (this.summoner = summoner),
            (this.succesfull = true),
            this.getMatches(summoner.puuid, region)
          )
        )
        .catch((err) => {
          if (err.response.status === 400) {
            this.isLoading = false;
            this.advice = true;
          }
        })
        .then(() => (this.isLoading = false));
    },
    getMatches: function (puuid, region) {
      matchService
        .getMatches(puuid, region)
        .then((matches) => (this.matches = matches))
        .catch((err) => {
          if (err.response.status === 400) {
            this.match = false;
          }
        })
        .then(() => (this.match = true));
    },
  },
};
</script>

<style>
</style>