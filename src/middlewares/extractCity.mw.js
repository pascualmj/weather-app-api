const locationClient = require("../config/locationClient");

const extractCity = async (req, res, next) => {
  let { city } = req.params;
  try {
    if (!city) {
      const { data } = await locationClient.getLocation();
      city = data.city;
    }
    req.city = city;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = extractCity;
