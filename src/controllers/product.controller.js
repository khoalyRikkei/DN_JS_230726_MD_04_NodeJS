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
  getAllProducts(req, res) {
    const productsJSON = fs.readFileSync("./src/models/data.json", "utf8");
    const products = JSON.parse(productsJSON);
    console.log(11111);
    res.json(products);
  }

  createProduct(req, res) {
    const data = { ...req.body };

    console.log(req);
    const productsJSON = fs.readFileSync("./src/models/data.json", "utf8");
    const products = JSON.parse(productsJSON);
    products.push(data);
    fs.writeFileSync("./src/models/data.json", JSON.stringify(products));
    res.json({
      status: 200,
      message: "Ok",
      data: products,
    });
  }
  deleteProduct(req, res) {}
}

export default ProductController;
