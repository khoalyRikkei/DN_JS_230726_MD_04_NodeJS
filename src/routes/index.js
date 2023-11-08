import { connection } from "../DB/config.js";
import { createTable, insertData } from "../DB/method.js";
import { user } from "../data/user.js";
import { cartModel } from "../models/cart.model.js";

export function route(app) {
  app.get("/create-table", () => {
    const data = createTable("carts", cartModel);
    console.log("Kiểm tra query", data);
    connection.query(data, function (err, results, fields) {
      console.log(11, err);
    });
  });

  app.get("/insert-table", () => {
    const data = insertData("users", user);

    console.log("Kiểm tra query", data);
    connection.query(data, function (err, results, fields) {
      console.log("Kieemr tra loi", err);
      console.log("", results); // results contains rows returned by server
      console.log("", fields); // fields contains extra meta data about results, if available
    });
  });
}
