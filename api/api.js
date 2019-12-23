const axios = require("axios");

const api = axios.create({
  baseURL: "https://jhanglek.eng.cmu.ac.th",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export { api };
