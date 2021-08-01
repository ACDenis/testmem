import axios from "axios";

const _axios = axios.create({
  // baseURL: "https://kemk.herokuapp.com/api/v1",
  baseURL: "http://185.212.128.102/api/v1",
});

export default _axios;
