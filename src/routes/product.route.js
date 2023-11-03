import express from "express";

import productController from "../controllers/product.controller.js";

const productRoute = express.Router();

//[GET]
productRoute.get("/", productController.getAllData);
productRoute.get("/:id", productController.getProduct);

// [POST]
productRoute.post("/", productController.createProduct);

//[PATCH]
productRoute.patch("/", productController.updateProduct);

//[DELETE]
productRoute.delete("/:id", productController.deleteProduct);

export default productRoute;
