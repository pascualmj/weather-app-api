const { Router } = require("express");
const router = Router();
const locationController = require("../controllers/location.controller");

router.get("/", locationController);

module.exports = router;
