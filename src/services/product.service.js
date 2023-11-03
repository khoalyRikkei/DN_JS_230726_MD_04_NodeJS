import { ServiceException } from "../exceptions/service.exception.js";
import { MSG_COMMON } from "../messages/index.js";
import readFile from "../utils/readFile.js";

class ProductServices {
  getAllProduct() {
    try {
      const data = readFile("product");
      return {
        statusCode: 200,
        message: MSG_COMMON.MSG_SUCCESS.get_data,
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
      throw new ServiceException(403, MSG_COMMON.MSG_INFO("Product").not_data);
    } catch (error) {
      throw error;
    }
  }
}

export default ProductServices;
