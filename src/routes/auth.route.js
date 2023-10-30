import express from "express";
import AuthController from "../controllers/auth.controller.js";

const authRouter = express.Router();
const autheController = new AuthController();

authRouter.post("/login", autheController.login);

authRouter.post("/register", autheController.register);

authRouter.get("/logout", (req, res) => {});

export default authRouter;
// thay thế cho module.exports của commonModule
