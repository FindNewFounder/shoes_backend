const express = require("express");
const router = express.Router();
const controller = require("../controllers/shoesController");

router.get("/", controller.getAllShoes);
router.get("/:id", controller.getShoeById);
router.post("/", controller.createShoe);
router.put("/:id", controller.updateShoe);
router.delete("/:id", controller.deleteShoe);

module.exports = router;
