import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json" assert { type: "json" };
import { route } from "./routes/index.js";
import handleException from "./middlewares/exceiption.js";

const app = express();
// dùng middleware để lấy bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// Chuyển data của body sang json
app.use(bodyParser.json());

// Cấu hình cors
app.use(cors());

route(app);
app.use(handleException);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(2222, () => {
  console.log("Connecting http://localhost:2222");
});
