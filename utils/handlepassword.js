const bcryptjs= require("bcryptjs")


const encrypt= async( passwordPlain) => {
  const hash=  await bcryptjs.hash(passwordPlain, 10)
  return hash
}

const compare= async(passwordPlain,hashPassword) => {
  const compare= await bcryptjs.compare(passwordPlain, hashPassword)
  return compare

}

module.exports={encrypt,compare}

