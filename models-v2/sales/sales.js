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
const today = new Date();
const formattedDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
const dailySales= new mongoose.Schema(
  { 
    client:{
      type: String,
    },
    date:{
      type:String,
      default:formattedDate
    },
    salesOfTheDay: [ {type: SaleProductSchema}]
  },
  {
    timestamps:true,
    versionKey:false
  }
)

module.exports = mongoose.model("dailySales", dailySales)