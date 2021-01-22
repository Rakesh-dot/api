const mongoose=require('mongoose');
const Register=mongoose.model('Register',{
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:String
    },
    phonenumber:{
        type:String
    }
})
module.exports=Register;