const {handlehttpErros} = require("../utils/handlehttpsErrors")
//pasar el array con los roles permitidos
const  checkRol=(rol)=>(req, res,next)=> {
try {
  const {user}=req;
  const roleByUser= user.role;
  const checkValueRole= rol.some((rolSingle)=> roleByUser.includes(rolSingle))
  if(!checkValueRole){
    handlehttpErros(res,"no permission",403)
  } else {
    next()
  }
} catch (error) {
  handlehttpErros(res,"error permission", 404)
}
}

module.exports= {checkRol}