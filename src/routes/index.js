import productRoute from "./product.route.js";
import receiptRouter from "./repceipt.route.js";

export function route(app) {
  
  app.use("/api/v1/products", productRoute);
  app.use("/api/v1/receipt", receiptRouter);
}
