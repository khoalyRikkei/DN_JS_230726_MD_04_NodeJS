import ProductController from "../controllers/product.controller.js";

const productController = new ProductController();

export function route(app) {
  // Tất cả product xử lý ở đây
  //[GET]
  app.get("/product/:id", productController.getProduct);
  //[POST]

  //[DELETE]
  app.get("/delete/:id", productController.deleteProduct);


//   Home
app.get("/", )
}
