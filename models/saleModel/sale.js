const mongoose = require("mongoose");

const saleByIndividualProductSchema = new mongoose.Schema(
{
    name:{
    type:String,
    },
    price:{
        type:Number,
    },
    amount:{
        type:Number
    },
},
{
    versionKey:false
});

const saleSchema = new mongoose.Schema(
{
    products: [{type:saleByIndividualProductSchema , required:true}],
    clientId:{type:mongoose.Types.ObjectId, required:false},
    date: { type:String},
    total:{ type:Number},
    cashReceived:{type:Number},
    changeGiven:{type:Number}
},
{
timestamps:true,
versionKey:false
})

module.exports=  mongoose.model("saleSchema", saleSchema);