const mongoose = require('mongoose')
const restaurantsSchema = new mongoose.Schema({
        areaName:{
           type:String
        },
        avgRating:{
            type:Number
        },
        costForTwo:{
            type:String
        },
        cuisines:{
            type:Array
        },
        name:{
            type:String
        }
})
const Restaurant=mongoose.model('restaurantList',restaurantsSchema)





const userSchema = new mongoose.Schema({
    userName : {
        type : String
    },
    contact:{
      type:Number
    },
    email : {
        type : String
    },
    password : {
        type : Number
    }
}, {versionKey : false})


const Users = mongoose.model('userDetail', userSchema)
module.exports={Restaurant,Users}










   

