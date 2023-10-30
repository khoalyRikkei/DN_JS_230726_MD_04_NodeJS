import express from "express";
import bodyParser from "body-parser";

// config evn
import "dotenv/config";
import { route } from "./routes/index.js";

//thay thế cho server trước đây
const app = express();

// dùng middleware bodyParser để lấy dữ liệu từ body http request
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

// Phương thức get --> yêu cầu dữ liệu
// app.get("/products", (req, res) => {
//   //res.write() --> res.end()

//   //   lấy từ database để trả về
//   res.send([
//     { id: 1, name: "products 1" },
//     { id: 2, name: "products 2" },
//   ]);
// });
// app.get("/products/:id", (req, res) => {
//   // Để lấy params --> req.params
//   console.log("Lấy id: ", req.params);
// });

// app.get("/account/:course/:lesson", (req, res) => {
//   // Để lấy params --> req.params
//   console.log("Lấy id: ", req.params);
// });

// app.post("/login", (req, res) => {
//   //res.write() --> res.end()
//   console.log("Kiểm tra req", req.body);
//   res.send("Hello data");
// });

// dùng với characters *
// app.get("/*", (req, res) => {
//   //res.write() --> res.end()
//   res.send("Page not found");
// });

// lấy PORT từ dotenv
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Connecting to http://localhost:${PORT}`);
});
