import Vue from 'vue';
import axiosGen from '@/util/axiosGen';
export default {
    
    getMatches: function(puuid,region){
        return new Promise((resolve, reject) => {
            axiosGen
              .get(`matches/${puuid}/${region}`)
              .then(response => {
                resolve(Vue._.get(response, 'data'))
              })
              .catch(err => reject(err));
          });
    }
}