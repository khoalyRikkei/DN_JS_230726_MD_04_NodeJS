import express from "express";

import productController from "../controllers/product.controller.js";
import handleException from "../middlewares/exceiption.js";

const productRoute = express.Router();

//[GET]
productRoute.get("/", handleException, productController.getAllData);
productRoute.get("/:id", productController.getProduct);

// [POST]
productRoute.post("/", productController.createProduct);

//[PATCH]
productRoute.patch("/", productController.updateProduct);

//[DELETE]
productRoute.delete("/:id", productController.deleteProduct);

export default productRoute;
