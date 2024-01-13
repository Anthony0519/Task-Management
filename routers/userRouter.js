const router = require("express").Router()
const {registerUser, signIn, signOut, allUsers} = require("../controllers/userController")
const authenticate = require("../middleware/authothication")
const myValidation = require("../Utils/validation")

router.post("/register",myValidation,registerUser)
router.post("/login",signIn)
router.post("/logout",authenticate,signOut)
router.get("/allusers",authenticate,allUsers)

module.exports = router