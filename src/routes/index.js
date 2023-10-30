import authRouter from "./auth.route.js";

export function route(app) {
  //   app.use("/products");

  //auth/login
  // auth/register
  //auth/logout
  app.use("/auth", authRouter);

  //   auth

  app.get("/auth/logout");
  app.post("/auth/login");
  app.post("/auth/register");
}
