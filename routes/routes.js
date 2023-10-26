import { readFileSync } from "fs";
const overviewHTML = readFileSync("./templates/overview.html");
const productHTML = readFileSync("./templates/product.html");



let productHTMLJSON = JSON.stringify(
  readFileSync("./templates/product.html", "utf-8")
);

const data = readFileSync("./models/data.json", "utf-8");
const dataConvert = JSON.parse(data); // chuyển đổi data.json sang mảng

const product = dataConvert[0];

// Đưa sản phẩm vào trong product
// console.log(productHTMLJSON);

for (const key in product) {
  productHTMLJSON = productHTMLJSON.replaceAll(`{{${key}}}`, product[key]);
  
}

export const routes = [
  {
    path: "/",
    title: "Home",
    content: overviewHTML,
  },
  {
    path: "/product",
    title: "Product",
    content: JSON.parse(productHTMLJSON),
  },
  {
    path: "/overview",
    title: "Overview",
    content: overviewHTML,
  },
];
