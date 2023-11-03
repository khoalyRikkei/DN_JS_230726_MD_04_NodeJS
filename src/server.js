import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { route } from "./routes/index.js";

const app = express();
// dùng middleware để lấy bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// Chuyển data của body sang json
app.use(bodyParser.json());

// Cấu hình cors
app.use(cors());

route(app);

app.listen(8888, () => {
  console.log("Connecting http://localhost:8888");
});
