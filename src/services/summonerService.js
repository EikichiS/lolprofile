import Vue from 'vue';
import axiosGen from '@/util/axiosGen';
export default {
    
    getProfile: function(name,region){
        return new Promise((resolve, reject) => {
            axiosGen
              .get(`${process.env.VUE_APP_SUMMONER_API}/${name}/${region}`)
              .then(response => {
                resolve(Vue._.get(response, 'data'))
              })
              .catch(err => reject(err));
          });
    }
}