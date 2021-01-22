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
            const data=new Register({username:username,password:password,address:address,email:email,age:age,phonenumber:hash_passwrd})
            data.save();

        })
        
   }
   else{
       res.send(validationErr.array())
   }
})




module.exports=router;