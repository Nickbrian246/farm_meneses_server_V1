const mongoose= require("mongoose")


const SaleProductSchema= new mongoose.Schema(
  {
    name:{
      type:String
    },
    price:{
      type:Number
    },
    tag:{
      type:String
    },
    whatIsItFor:{
      type:String,
      required:false
    },
    size:{
      type:String
    },
    brand:{
      type:String,
      required:false
    },
    pieces:{
      type:Number
    },
  },
{
  timestamps:true,
  versionKey:false
}
)

const dailySales= new mongoose.Schema(
  { 
    clientId:{
      type: String,
      unique:true
    },
    date:{
      type:Date,
      default:Date.now
    },
    productsInStock: [ {type: SaleProductSchema}]
  },
  {
    timestamps:true,
    versionKey:false
  }
)

module.exports = mongoose.model("dailySales", dailySales)