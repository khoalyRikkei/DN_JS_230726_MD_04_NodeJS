import express from "express";

import receiptController from "../controllers/receipt.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const receiptRouter = express.Router();

//[GET]
receiptRouter.get("/", isAuth, receiptController.getReceipt);

//[PATCH]

export default receiptRouter;
