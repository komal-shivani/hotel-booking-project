const mongoose=require('mongoose')
const Schema=mongoose.Schema

const CuisineSchema=new Schema({
    name:{
        type:String,
        required:true,
    }
})

const Cuisine=mongoose.model('Cuisine', CuisineSchema)

module.exports={Cuisine}