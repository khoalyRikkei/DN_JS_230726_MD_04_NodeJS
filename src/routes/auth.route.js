import express from "express";

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {

    console.log(req.body);
  res.send("Login thành công");
});

authRouter.post("/register", (req, res) => {
  res.send("Register thành công");
});

authRouter.get("/logout", (req, res) => {});

export default authRouter;
