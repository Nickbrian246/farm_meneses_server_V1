const {Sales} = require("../../models-v2")
const {handlehttpErros} = require("../../utils/handlehttpsErrors")

const getReports= async  (req, res)=> {
  try {
    const client = req.user._id;
    const {dates} = req.body
    const findSales = [];
    
    for (const item of dates) {
      const sales = await Sales.find({ date: item, client });
      findSales.push(sales);
    }
    res.send({data:findSales})

  } catch (error) {
    handlehttpErros(res,` error al obtener reportes${error}`,400)
  }
}


module.exports = {getReports}