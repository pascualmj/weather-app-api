const locationClient = require("../services/locationClient.js");

const getLocation = async (req, res, next) => {
  try {
    const { data } = await locationClient.getLocation();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getLocation;
