const router = require("express").Router()
const { subTask } = require("../controllers/subTaskController")
const authenticate = require("../middleware/authothication")

router.post("/add_subtask",authenticate,subTask)

module.exports = router