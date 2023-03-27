const handlehttpErros = (res, message ="error", code) =>{
    res.status(code)
    res.send({error:message})
}

module.exports ={handlehttpErros};