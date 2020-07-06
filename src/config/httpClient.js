const axios = require("axios");

const locationClient = axios.create({
  baseURL: "http://ip-api.com/json",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

module.exports = {
  locationClient,
};
