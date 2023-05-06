const mongoose =  require("mongoose");

const DrinksSchema = new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    type:{type:String},
    brand:{type:String, required:false},
    parts:{type:Number, required:false},
    size:{type:String, require: false},
    imgId:{type:mongoose.Types.ObjectId , required:false}
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("drinksModel", DrinksSchema)