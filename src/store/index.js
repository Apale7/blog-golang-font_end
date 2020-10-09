import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: "",
    refresh_token: "",
    logged: true
  },
  mutations: {
    setAccessToken(state, token) {
      state.access_token = token;
    },
    setRefreshToken(state, token) {
      state.refresh_token = token;
    }
  },
  actions: {},
  modules: {}
});
