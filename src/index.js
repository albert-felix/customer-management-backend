const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const customerRouter = require("./routers/customerRouter")

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("Backend running ")
})

app.use("/customer", customerRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})