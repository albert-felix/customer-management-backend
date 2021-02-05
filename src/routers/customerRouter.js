const express = require("express");
const CustomerList = require("../mockData/customerData")

const customerRouter = express.Router();

customerRouter
.get("/list", async(req,res) => {
    const customers = await CustomerList;
    res.status(200).json({customers : customers});
})
.get("/info/:id", async(req,res) => {
    const customer = await CustomerList[req.params.id];
    res.status(200).json({customer : customer});
})
.post("/add", async(req,res) => {
    const customer = req.body;
    CustomerList.push(customer)
    res.status(200).json({status: "SUCCESS"})
})
.post("/edit/:id", async(req,res) => {
    const customer = req.body;
    CustomerList.splice(req.params.id, 1, customer)
    res.status(200).json({status: "SUCCESS"})
})

module.exports = customerRouter;