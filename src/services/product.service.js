import { connection } from "../db.js";
import { NotFoundException } from "../exceptions/index.js";
import { MSG_COMMON } from "../messages/index.js";
import { insertData } from "../utils/db.util.js";
import readFile from "../utils/readFile.js";

class ProductServices {
  getAllProduct() {
    try {
      connection.query(
        "SELECT `carts`.`id` , `users`.`name` as username , products.name as productName FROM `carts` left JOIN `products` on `products`.`id` =`carts`.`product_id` left JOIN `users` on `users`.`id` =`carts`.`user_id`",
        function (err, results, fields) {
          console.log(results);
        }
      );

      const data2 = {
        name: 1111,
        phone: "0909100999",
        create_at: new Date().toISOString().split("T")[0],
      };

      console.log(data2);
      connection.query(
        insertData(data2, "test"),
        Object.values(data2),
        function (err, results, fields) {
          console.log(err);
        }
      );
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

// CREATE TABLE user (
//   id int not null primary key auto_increment,
//   username varchar(20) not null ,
//   password text not null,
//   phone char(10),
//   create_at timestamp,
//   update_at  timestamp
//   );

//   CREATE TABLE user_address (
//   id int not null primary key auto_increment,
//   user_id int not null,
//   phone char(10),
//   address varchar(100),
//   city varchar(20),
//   foreign key (user_id) REFERENCES user(id)
//   );

//   CREATE TABLE TEST (
//   id int not null primary key auto_increment,
//   name int not null,
//   phone char(10),
//   create_at datetime
//   )
