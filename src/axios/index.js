import axios from "axios";
import store from "../store";
// import router from "../router";

export default function setAxios() {
  //请求拦截
  axios.interceptors.request.use(config => {
    if (store.state.access_token) {
      config.headers.access_token = store.state.access_token;
    }
    return config;
  });
  axios.interceptors.response.use(response => {
    if (response.status === 200) {
      const data = response.data;
      console.log(data);
      if (data.code === -1) {
        store.commit("setAccessToken", "");
        // axios.post()
      } else if (data.code === -2) {
        store.commit("setAccessToken", "");
        store.commit("setRefreshToken", "");
        // router.replace({ path: "/login" });
      }
      return data;
    }
    return response;
  });
}
