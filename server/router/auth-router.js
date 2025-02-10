const express = require("express")
const authcontroller = require("../controller/auth-controller")
const {signupschema,loginschema} = require("../validation/auth-validation")

const validate = require("../middleware/validation-middleware")
const authmiddleware = require("../middleware/auth-middleare")
const router = express.Router()
router.route("/").get(authcontroller.home)
router.route("/register").post(validate(signupschema),authcontroller.register)
router.route("/login").post(validate(loginschema),authcontroller.login)
router.route("/user").get(authmiddleware,authcontroller.user)

module.exports = router
