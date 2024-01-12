const express = require("express")
require("./config/config")
const cors = require("cors")
const userRouter = require("./routers/userRouter")
const statusRouter = require("./routers/statusRouter")
const taskRouter = require("./routers/taskRouter")
const subTaskRouter = require("./routers/subTaskRouter")

// create an app instance of express
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/V1/users",userRouter)
app.use("/api/V1/users",statusRouter)
app.use("/api/V1/users",taskRouter)
app.use("/api/V1/users",subTaskRouter
)

// check if the server is connected
app.listen(process.env.PORT,()=>{
    console.log(`server on port: ${process.env.PORT}`);
})