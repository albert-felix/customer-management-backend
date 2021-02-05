const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const customerRouter = require("./routers/customerRouter");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("Backend running ")
})

app.use("/customer", customerRouter)
app.use("/user", userRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})