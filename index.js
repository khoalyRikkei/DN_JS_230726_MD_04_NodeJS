import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Sử dụng body-parser để lấy data từ HTTP Request body
app.use(bodyParser.urlencoded({ extended: true }));
// Chuyển đổi kiểu dữ liệu của data lấy từ body --> json

app.use(bodyParser.json());

// Xử lý lỗi CORS Policy
app.use(cors());



