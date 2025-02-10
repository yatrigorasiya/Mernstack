const express = require("express")
const services = require("../controller/services-controller")
const router = express.Router()
router.route("/service").get(services)
module.exports = router;