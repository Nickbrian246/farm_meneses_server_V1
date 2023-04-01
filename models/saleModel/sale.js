const mongoose = require("mongoose");

const saleByIndividualProductSchema = new mongoose.Schema(
{
    name:{
    type:String,
    },
    precio:{
        type:Number,
    },
    cantidad:{
        type:Number
    },
    id:{
    type:mongoose.Types.ObjectId
    }
},
{
    versionKey:false
});

const saleSchema = new mongoose.Schema(
{
    products: [{type:saleByIndividualProductSchema , required:true}],
    id:{type:mongoose.Types.ObjectId},
    clientId:{type:mongoose.Types.ObjectId, required:false},
    date: { type:String},
    total:{ type:Number}
},
{
timestamps:true,
versionKey:false
})

module.exports=  mongoose.model("saleSchema", saleSchema);