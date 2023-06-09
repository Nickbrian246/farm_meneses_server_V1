const mongoose = require ("mongoose")

const medicinesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    compound:{
        type:String
    },
    price:{
        type:Number
    },
    type:{
        type:String
    },
    quantity:{
        type:Number
    },
    function:{
        type:String
    },
    imgId:{
        type:String,
        required:false
    }
},
{
    timestamps:true,
    versionKey:false,
}
);

module.exports = mongoose.model("medicines",medicinesSchema)