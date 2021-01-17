const express=require('express');
const { model } = require('mongoose');
const Register=require('../models/register_model');
const router=express.Router();

router.post('/register',function(req,res){
    console.log(req.body)
    const username=req.body.username;
    const password=req.body.password;
    const address=req.body.address;
    const email=req.body.email;
    const age=req.body.age;
    const phonenumber=req.body.phonenumber;
    const data=new Register({username:username,password:password,address:address,email:email,age:age,phonenumber:phonenumber})
    data.save();
})





module.exports=router;