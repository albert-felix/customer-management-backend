const express = require("express");
const CustomerList = require("../mockData/customerData")

const customerRouter = express.Router();

customerRouter
.get("/list", (req,res) => {
    const customers =  CustomerList;
    res.status(200).json({customers : customers});
})
.get("/info/:id", async(req,res) => {
    let customer = {};
    for(let i=0; i<CustomerList.length; i++){
        if(CustomerList[i]['id'] == req.params.id){
            customer = CustomerList[i]
            break
        }
    }
    res.status(200).json({customer : customer});
})
.post("/add", (req,res) => {
    const customer = req.body;
    customer['id'] = CustomerList.length + 1
    CustomerList.push(customer)
    res.status(200).json({status: "SUCCESS"})
})
.post("/edit/:id", (req,res) => {
    const customer = req.body;
    for(let i=0; i<CustomerList.length; i++){
        if(CustomerList[i]['id'] == req.params.id){
            CustomerList.splice(i, 1, customer)
            break
        }
    }
    res.status(200).json({status: "SUCCESS"})
})

module.exports = customerRouter;