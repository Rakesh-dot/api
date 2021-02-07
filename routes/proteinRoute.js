const { json } = require('express');
const express=require('express');
const router=express.Router();
const Proteins=require('../models/proteinModel');
const auth=require('../middleware/auth');


router.post('/proteins/insert',auth.verifyUser,auth.verifyAdmin,function(req,res){
    const ptitle=req.body.ptitle;
    const pimage=req.body.pimage;
    const pdesc=req.body.pdesc;
    const pcategory=req.body.pcategory;

    const pdata=new Proteins({ptitle:ptitle,pimage:pimage,pdesc:pdesc,pcategory:pcategory});
    pdata.save()
    .then(function(result){
        res.status(201).json({message:"Protein created!!"})
    })
    .catch(function(e){
        res.status(500),json({abc:e})
    })
})


module.exports=router;