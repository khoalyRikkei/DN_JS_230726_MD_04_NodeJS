export const cartModel = {
  id: "int not null primary key auto_increment",
  user_id: "int not null",
  product_id: "int not null",
  quantiy: "int not null",
  price: "int not null",
};

function createCartModel() {
  const table = createTable("carts", cartModel);
  connection.query(table, function (err, results, fields) {
    if (err) {
      console.log("Lỗi cart", err);
    }
  });
}
