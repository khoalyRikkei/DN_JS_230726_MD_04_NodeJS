import express from "express";
import "dotenv/config";
import { route } from "./routes/index.js";

const app = express();

// kết nốt

route(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`connecting to http://localhost:${port}`);
});
