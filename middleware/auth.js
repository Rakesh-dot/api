//the function of the guard
const { json } = require('express');
const jwt=require('jsonwebtoken');
const { findOne } = require('../models/proteinModel');
const Register = require('../models/register_model');

module.exports.verifyUser=function(req,res,next){
    try{
        const token=req.headers.authorization.split(" ")[1];
        const data=jwt.verify(token,'secretkey');
        
        Register.findOne({_id:data.userId})
        .then(function(result){
            console.log(result)
            req.userInfo=result;
            next();
        })
        .catch(function(e){
            res.status(401).json({error:e})
        })
    
    }
    catch(e){
        res.status(401).json({error:e})
    }
}
//guard for the adminUser
module.exports.verifyAdmin=function(req,res,next){
    console.log(req.userInfo)
    if(!req.userInfo){
        return res.status(401).json({message:"Invalid User!!"});
    }
    else if(req.userInfo.userType!=='Admin'){
        return res.status(401).json({message:"Unauthorizedmmmmm!!"})
    }
    next();
}


//guard for admin
module.exports.verifyCustomer=function(req,res,next){
    if(!req.userInfo){
        return res.status(401).json({message:"Invalid User!!"});
    }
    else if(req.userInfo.userType!=='Customer'){
        return req.status(401).json({message:"Unauthorized!!"})
    }
    next();
}