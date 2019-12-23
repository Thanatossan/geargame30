import { api } from "../api/api";
import axios from "axios";
export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user;
  }
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit("SET_USER", req.session.authUser);
    }
  },
  async login({ commit }, { username, password }) {
    var permission = false;
    const user = { username, password };
    const res = await api.post("/api/auth", { user });
    permission = res.data;
    const callback = await axios.post("/service/login", {
      username,
      password,
      permission
    });
    console.log(callback.data);
    commit("SET_USER", { username: callback.data });
    if (permission) {
      alert("login sucessful");
      setTimeout('location.href="/judge"', 0);
    } else {
      alert("login failed");
      setTimeout('location.href="/login"', 0);
    }
  },

  async logout({ commit }) {
    await axios.post("/service/logout");
    setTimeout('location.href="/login"', 0);
    commit("SET_USER", null);
  },

  async authenCheck() {
    const res = await axios.get("/service/authCheck");
    console.log(res);

    if (res.data.login) setTimeout('location.href="/judge"', 0);
  }
};
