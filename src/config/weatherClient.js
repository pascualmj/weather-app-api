const axios = require("axios");

const weatherClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getCurrentWeather = (city) => {
  return weatherClient.get(
    `/weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );
};

module.exports = {
  getCurrentWeather,
};
