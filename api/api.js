const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export { api };
