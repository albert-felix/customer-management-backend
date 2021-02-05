const express = require("express");
const UserData = require("../mockData/userData");

const userRouter = express.Router();

userRouter.post("/login", (req,res) => {
    let userFound = false;
    const login = req.body;
    for(let data of UserData){
        if(data.email === login.email && data.password === login.password){
            res.status(200).json({
                status: 'SUCCESS',
                isManager: data.isManager
            })
            userFound = true;
            break
        }
    }
    if(!userFound){
        res.status(500).json({status: 'FAIL'})
    }
    
})

module.exports = userRouter;