const weatherClient = require("../services/weatherClient");

const getForecast = async (req, res, next) => {
  try {
    const {
      data: { coord },
    } = await weatherClient.getCurrentWeather(req.city);
    const { data } = await weatherClient.getWeatherForecast({
      lat: coord.lat,
      lon: coord.lon,
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getForecast,
};
