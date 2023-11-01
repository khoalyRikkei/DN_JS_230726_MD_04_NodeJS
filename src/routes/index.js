import { sendEmail } from "../configs/mail.config.js";
import authRouter from "./auth.route.js";

export function route(app) {
  //   app.use("/products");

  //auth/login
  // auth/register
  //auth/logout
  app.use("/api/v1/auth", authRouter);
  //   app.use("/api/v1/products", authRouter);
  //   app.use("/api/v1/orders", authRouter);

  //   auth

  //   app.get("/auth/logout");
  //   app.post("/auth/login");
  //   app.post("/auth/register");

  app.use("/api/v1/auth", authRouter);
  app.get("/api/v1/sendmail", sendEmail);
}
