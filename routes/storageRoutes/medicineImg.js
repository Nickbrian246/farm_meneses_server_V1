const express = require("express");
const router= express.Router();
const {uploadMiddleware} = require("../../utils/handleStorage")
const {
createItem,
deleteItem,
getItem,
getItems,
updateItem} = require("../../controllers/storageControllers/medinceImgController")


router.post("/",uploadMiddleware.single("myfile"),createItem);
router.get("/:id",getItem)
router.get("/",getItems)
router.delete("/:id",deleteItem)
module.exports= router