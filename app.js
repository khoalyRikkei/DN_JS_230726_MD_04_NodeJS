import express from "express";
import { route } from "./src/routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Cấu hình cors
app.use(cors());

route(app);

// GET / --> hiển thị home
// GET /overview --> Hiển thị home

// GET /create --> Hiển thị form tạo sản phẩm mới
// POST /create --> Tạo sản phẩm mới theo form

// GET /product/:id --> hiển thị product detail

// GET /delete/:id --> Xóa sản phẩm
// POST /product/:id --> update sản phẩm từ form

// GET /search

app.listen(5555, () => {
  console.log("Connecting to http://localhost:5555");
});
