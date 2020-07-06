const { locationClient } = require("../config/httpClient");

const getLocation = async (req, res, next) => {
  try {
    const { data } = await locationClient.get("/");
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLocation,
};
