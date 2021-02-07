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

router.put("/proteins/update",auth.verifyAdmin,function(req,res){
    const ntitle=req.body.ntitle;
    const ndesc=req.body.ndesc;
    const ncategory=req.body.ncategory;
    const nimage=req.body.nimage;
    const id=req.body.nid;


    Proteins.updateOne({_id:id}),{ntitle:ntitle,ndesc:ndesc,ncategory:ncategory,nimage:nimage,id:nid}
    .then(function(result){
        res.status(200).json({message:"Updated"})
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })

})

//for delete
router.delete('/proteins/delete/:id', function(req,res){
    const id = req.params.customerId
    Proteins.deleteOne({_id: id})
    .then(function(result){
        res.status(200).json({status: success})
    })
    .catch(function(e){
        res.status(200).json({error: e})
    })
})

router.get("/proteins/all", function(req,res){
    Proteins.find()
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(er){
        res.status(500).json({error : e})
    })
})

router.get("/proteins/single/:id",function(req,res){
    const id=req.params.id;
    Proteins.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(er){
        res.status(500).json({error:er})
    })
})

module.exports=router;