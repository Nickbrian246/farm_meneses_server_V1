const mongoose = require("mongoose");

const individualProductSchema = new mongoose.Schema(
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
    idProduct:{
      type:mongoose.Types.ObjectId,
    }

},
{
    versionKey:false
});

const listCartProductSchema= new mongoose.Schema({
  products: [ {type: individualProductSchema}]

}, {
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model("listCartProductSchema",listCartProductSchema )