import { MSG_COMMON } from "../messages/index.js";
import ProductServices from "../services/product.service.js";
import readFile from "../utils/readFile.js";

import writeFile from "../utils/writeFile.js";

const productServices = new ProductServices();

// Lấy toàn bộ product
const getAllData = (req, res) => {
  // #swagger.tags = ['Users']
  /*  #swagger.auto = false

        #swagger.path = '/users/{id}'
        #swagger.method = 'put'
        #swagger.produces = ['application/json']
        #swagger.consumes = ['application/json']

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'User ID.',
            required: true,
            type: 'integer'
        }

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'User data.',
            required: true,
            schema: {
                username: "user",
                password: "1234"
            }
        }
    */
  try {
    const data = productServices.getAllProduct();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: MSG_COMMON.MSG_ERROR.server,
    });
  }
};

// Lấy product theo điều kiện
const getProduct = (req, res) => {
  /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: { $ref: '#/definitions/AddUser' }
    } */
  const id = req.params.id;
  try {
    const data = productServices.getProduct({ id: id });
    res.status(200).send(data);
  } catch (err) {
    // Xử lý các lỗi của product
    // 1. Lỗi không tìm thấy sản phẩm
    if (err.message === MSG_COMMON.MSG_INFO("products").not_data) {
      return res.status(403).send(MSG_COMMON.MSG_INFO("products").not_data);
    }

    // 2. Lỗi server
    res.status(500).send({
      message: MSG_COMMON.MSG_ERROR.server,
    });
  }
};

const createProduct = (req, res) => {
  const data = readFile("products");
  if (data) {
    const newData = { ...req.body };
    const products = data;
    const newId = Number(products[products.length - 1].id) + 1;
    newData.id = newId;
    products.push(newData);
    writeFile("products", products);
    return res.status(200).json(newData);
  }
  return res.status(500).send("Internal Server Error");
};

const updateProduct = (req, res) => {
  const data = readFile("products");
  if (data) {
    const newData = { ...req.body };

    const products = data;
    if (!newData.id) {
      return res.status(400).send("Không có sản phẩm cần update");
    }
    const newProducts = products.map((product) => {
      if (product.id == newData.id) {
        const newProduct = { ...product, ...newData };
        return newProduct;
      }
      return product;
    });
    writeFile("products", newProducts);
    return res.status(200).json(newProducts);
  }
  return res.status(500).send("Internal Server Error");
};

const deleteProduct = (req, res) => {
  const data = readFile("product");

  if (data) {
    const idDelete = req.params.id;
    const products = data;
    let isDelete = false;

    const newProducts = products.filter((product) => {
      if (product.id != idDelete) {
        return true;
      }
      isDelete = true;
      return false;
    });
    writeFile("products", newProducts);
    return res.status(200).json(isDelete);
  }
  return res.status(500).send("Internal Server Error");
};

export default {
  getAllData,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
