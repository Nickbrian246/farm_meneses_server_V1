require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express();
const dbConnect = require("./config/mongo")

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

// app.use("/api", require("./routes/medicRoutes"))
// app.use("/api", require("./routes/storageRoutes"))
// app.use("/api", require("./routes/salesRoutes"))
// app.use("/api", require("./routes/drinksRoutes"))
// app.use("/api", require("./routes/listCartRoutes"))
// app.use(express.static("storage"))
// V2
app.use("/apiV2",require("./routes-V2/inputDynamicSearchByName"))
app.use("/apiV2", require("./routes-V2/productsStockV2"))
app.use("/apiV2", require("./routes-V2/auth"))
app.use("/apiV2", require("./routes-V2/sales"))
app.use("/apiV2", require("./routes-V2/reports"))
app.use("/apiV2", require("./routes-V2/user"))

app.listen(PORT,() => {
    console.log("conectado al puerto", PORT)
})

dbConnect()
