const admincontroller = require("../controller/admin-controller")

const express = require("express")
const authmiddleware = require("../middleware/auth-middleare")
const adminmiddlware = require("../middleware/admin-middleware")
const router = express.Router()
router.route("/users").get(authmiddleware,adminmiddlware,admincontroller.getAllUser)
router.route("/users/:id").get(authmiddleware,adminmiddlware,admincontroller.getUserById)
router.route("/users/update/:id").patch(authmiddleware,adminmiddlware,admincontroller.updateuserById)


router.route("/users/delete/:id").delete(authmiddleware,adminmiddlware,admincontroller.deleteByUserId)
router.route("/contacts").get(authmiddleware,adminmiddlware,admincontroller.getAllContacts)
router.route("/contacts/delete/:id").delete(authmiddleware,adminmiddlware,admincontroller.deleteByContactId)

module.exports = router