const express = require("express");
const router = express.Router();
const {
    createItem,
    deleteItem,
    getItem,
    getItems,
    updateItem,
    getDrinksByName,
} = require("../../controllers/drinksController/drinksController")

router.post("/",createItem);
router.get("/",getItems);
router.get("/:id",getItem);
router.put("/:id",updateItem);
router.delete("/:id",deleteItem)

module.exports = router