const mongoose = require("mongoose")

const MedicImgSchema = new mongoose.Schema({
    url:{
        type:String,
    },
    fileName:{
        type:String
    }
},{
    timestamps:true,
    versionKey:false,
    
});


module.exports = mongoose.model("medicImgSchema", MedicImgSchema)