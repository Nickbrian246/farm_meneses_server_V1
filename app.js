require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express();
const dbConnect = require("./config/mongo")

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json())

app.use("/api", require("./routes/medicRoutes"))
app.use("/api", require("./routes/storageRoutes"))
app.use("/api", require("./routes/salesRoutes"))
app.use("/api", require("./routes/whiteProductsRoutes"))
app.use(express.static("storage"))

app.listen(PORT,() => {
    console.log("conectado al puerto", PORT)
})

dbConnect()
