const mongoose=require('mongoose');
const Register=mongoose.model('Register',{
    username:{
        type:String
    },
    password:{
        type:String
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