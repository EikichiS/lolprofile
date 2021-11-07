import axios from 'axios';

const axiosGen = axios.create({
    baseURL: "https://lolapieikichis.herokuapp.com"
  });

  export default axiosGen;