import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json" assert { type: "json" };
import { route } from "./routes/index.js";
import { UnauthorizedException } from "./exceptions/UnauthorizedException.js";

const app = express();
// dùng middleware để lấy bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// Chuyển data của body sang json
app.use(bodyParser.json());

// Cấu hình cors
app.use(cors());

route(app);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Handle exception
app.use((err, req, res, next) => {
  if (err instanceof UnauthorizedException) {
    
  }
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8888, () => {
  console.log("Connecting http://localhost:8888");
});
