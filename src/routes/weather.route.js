const { Router } = require("express");
const router = Router();
const weatherController = require("../controllers/weather.controller");
const extractCityMiddleware = require("../middlewares/extractCity.mw");

router.get("/:city?", extractCityMiddleware, weatherController.getCurrentWeather);

module.exports = router;
