const mongoose= require("mongoose")


const ProductSchemaV2= new mongoose.Schema(
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
    compound:{
      type:String,
      required:false
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
    }


  },
{
  timestamps:true,
  versionKey:false
}
)

module.exports = mongoose.model("productSchemaV2", ProductSchemaV2)