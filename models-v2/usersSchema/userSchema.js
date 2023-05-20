const mongoose= require("mongoose")


const UserSchema =  new mongoose.Schema (
  {
    name:{
      type:String
    },
    age:{
      type:Number
    },
    state:{
      type:String
    },
    email:{
      type:String,
      unique:true
    },
    password:{
      type:String
    },
    role:{
      type:["admin", "employee","master"],
      default: "admin"
    }
  },
  {
    timestamps:true,
    versionKey:false
  })

  // const Users = new mongoose.Schema(
  //   {
  //     Users: [{ type: UserSchema}]
  //   },{
  //   timestamps:true,
  //   versionKey:false
  // })

  module.exports= mongoose.model("Users", UserSchema)