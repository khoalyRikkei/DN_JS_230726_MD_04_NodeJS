import express from "express";

import receiptController from "../controllers/receipt.controller.js";

const receiptRouter = express.Router();

//[GET]
receiptRouter.get("/", receiptController.getReceipt);

//[PATCH]

export default receiptRouter;
