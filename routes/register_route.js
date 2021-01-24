const express=require('express');
const { model } = require('mongoose');
const Register=require('../models/register_model');
// const{ route }=require('')
const router=express.Router();
const{check,validationResult}=require('express-validator');
const bcryptjs=require('bcryptjs');


router.post('/register',[
    check('username','username not inserted!!').not().isEmpty(),
    check('password','password not inserted!!').not().isEmpty()
],function(req,res){
    const validationErr=validationResult(req);
//    console.log(req.body)
   // res.send(validationErr.array());
   if(validationErr.isEmpty()) 
   {
        const username=req.body.username;
        const password=req.body.password;
        const address=req.body.address;
        const email=req.body.email;
        const age=req.body.age;
        const phonenumber=req.body.phonenumber;
        bcryptjs.hash(password,10,function(err,hash_passwrd){
            const data=new Register({username:username,password:hash_passwrd,address:address,email:email,age:age,phonenumber:phonenumber})
            data.save().then(function(result){
                res.status(201).json({message:"Registered!!"})
            }).catch(function(err1){
                res.status(500).json({message : err1})
            })

        })
        
   }
   else{
       res.status(400).json(validationErr.array())
   }
})


router.get('/user/login',function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    Register.findOne({email:email})
    .then(function(customerData){
        if(customerData===null){
            //user not found
            return res.status(403).json({message:"invalid details!!"})
        }
        //found user
        bcryptjs.compare(password,customerData.password,function(err,result){
            if(result===false){
                return res.status(403).json({message:"invalid details!!"})
            }
            res.send("correct details!!")
        })
    })
    .catch()
})

module.exports=router;