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
    <v-row justify="center" >
      <Loader :visible="!match" />
      <v-expansion-panels accordion v-if="match">
        <v-expansion-panel v-for="match in matches" :key="match.info">
          <v-expansion-panel-header class=""
            >{{ match.info.gameCreation | formatDateTime }}
            {{ match.info.gameMode }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-item-group active-class="primary">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card
                      class="mx-auto"
                      :color="match.info.teams[0].win ? '#B2EBF2' : '#FFCDD2'"
                    >
                      <v-subheader>{{
                        match.info.teams[0].win ? "Victoria" : "Derrota"
                      }}</v-subheader>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">Campeon</th>
                              <th class="text-left">Invocador</th>
                              <th class="text-left">KDA</th>
                              <th class="text-center">Objetos</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="participant in match.info.participants.filter(
                                (e) => e.teamId == 100
                              )"
                              :key="participant.summonerId"
                            >
                              <td>
                                <img
                                  :src="
                                    'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/' +
                                    participant.championName +
                                    '.png'
                                  "
                                  alt="user"
                                  class="rounded-circle"
                                  width="40"
                                />
                              </td>
                              <td>                              <a @click="
                                  () => {
                                    (match = false),getProfile(participant.summonerName,region);
                                  }
                                ">{{ participant.summonerName }} </a></td>
                              <td>
                                {{ participant.kills }}/{{
                                  participant.deaths
                                }}/{{ participant.assists }}
                              </td>
                              <td>
                                <v-simple-table>
                                  <template v-slot:default>
                                    <tbody>
                                      <tr>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item0 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item0"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item1 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item1"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item2 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item2"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item3 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item3"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item4 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item4"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item5 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item5"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item6 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item6"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </template>
                                </v-simple-table>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card
                      class="mx-auto"
                      :color="match.info.teams[1].win ? '#B2EBF2' : '#FFCDD2'"
                    >
                      <v-subheader>{{
                        match.info.teams[1].win ? "Victoria" : "Derrota"
                      }}</v-subheader>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">Campeon</th>
                              <th class="text-left">Invocador</th>
                              <th class="text-left">KDA</th>
                              <th class="text-center">Objetos</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="participant in match.info.participants.filter(
                                (e) => e.teamId == 200
                              )"
                              :key="participant.summonerId"
                            >
                              <td>
                                <img
                                  :src="
                                    'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/' +
                                    participant.championName +
                                    '.png'
                                  "
                                  alt="user"
                                  class="rounded-circle"
                                  width="40"
                                />
                              </td>
                              <td>
                              <a @click="
                                  () => {
                                    (match = false),getProfile(participant.summonerName,region);
                                  }
                                ">{{ participant.summonerName }} </a>
                              </td>
                              <td>
                                {{ participant.kills }}/{{
                                  participant.deaths
                                }}/{{ participant.assists }}
                              </td>
                              <td>
                                <v-simple-table>
                                  <template v-slot:default>
                                    <tbody>
                                      <tr>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item0 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item0"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item1 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item1"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item2 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item2"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item3 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item3"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item4 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item4"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item5 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item5"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                        <td class="px-0">
                                          <img
                                            :src="
                                              'http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/' +
                                              participant.item6 +
                                              '.png'
                                            "
                                            alt="user"
                                            width="30"
                                            v-if="participant.item6"
                                          />
                                          <img
                                            :src="'https://opgg-static.akamaized.net/images/pattern/opacity.1.png'"
                                            alt="user"
                                            width="30"
                                            v-else
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </template>
                                </v-simple-table>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card>
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