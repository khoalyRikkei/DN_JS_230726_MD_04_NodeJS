import fs from "fs";

class ProductController {
  getProduct(req, res) {
    const id = req.params.id;

    const productsJSON = fs.readFileSync("./src/models/data.json", "utf8");
    const products = JSON.parse(productsJSON);

    const product = products.find((product) => product.id == id);
    if (product) {
      res.render("product", {
        product: product,
      });
    } else {
      res.render("error", {
        message: "Product not found",
      });
    }
  }
  deleteProduct(req, res) {}
}

export default ProductController;
