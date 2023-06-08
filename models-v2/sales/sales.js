const mongoose= require("mongoose")


const SaleProductSchema= new mongoose.Schema(
  {
    name:{
      type:String
    },
    price:{
      type:Number
    },
    quantity:{
      type:Number
    },
    total:{
      type:String
    },
    id:{
      type:String
    },
  },
{
  timestamps:true,
  versionKey:false
}
)
const today = new Date();
const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const dailySales= new mongoose.Schema(
  { 
    client:{
      type:String
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