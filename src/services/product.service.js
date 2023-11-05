import { NotFoundException } from "../exceptions/index.js";
import { MSG_COMMON } from "../messages/index.js";
import readFile from "../utils/readFile.js";

class ProductServices {
  getAllProduct() {
    try {
      const data = readFile("product44444444");
      return {
        statusCode: 200,
        message: MSG_COMMON.MSG_SUCCESS("Sản phẩm").read,
        data: data,
      };
    } catch (error) {
      throw error;
    }
  }
  getProduct(condition) {
    try {
      const data = readFile("products");
      const product = data.find((product) => {
        let isFind = true;
        for (const key in condition) {
          if (product[key] != condition[key]) {
            isFind = false;
          }
        }
        return isFind;
      });
      if (product) {
        return {
          statusCode: 200,
          message: MSG_COMMON.MSG_SUCCESS.get_data,
          data: product,
        };
      }
    } catch (error) {
      throw new NotFoundException("Sản phẩm không được tìm thấy", 403);
    }
  }
}

export default ProductServices;
