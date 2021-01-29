//the function of the guard
const jwt=require('jsonwebtoken');

module.exports.verifyUser=function(req,res,next){
    const token=req.headers.authorization.split(" ")[1];
    const data=jwt.verify(token,'secretkey');
    console.log(data.userId);
    next();
}