const { Router } = require("express");
const router = Router();
const locationController = require("../controllers/location.controller");

router.get("/", locationController.getLocation);

module.exports = router;
