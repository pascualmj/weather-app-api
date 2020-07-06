const weatherClient = require("../services/weatherClient");

const getCurrentWeather = async (req, res, next) => {
  try {
    const { data } = await weatherClient.getCurrentWeather(req.city);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCurrentWeather,
};
