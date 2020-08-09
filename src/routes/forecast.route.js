const { Router } = require("express");
const router = Router();
const forecastController = require("../controllers/forecast.controller");
const extractCityMiddleware = require("../middlewares/extractCity.mw");

router.get("/:city?", extractCityMiddleware, forecastController);

module.exports = router;
