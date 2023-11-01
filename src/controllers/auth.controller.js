import AuthService from "../services/auth.service.js";

const authService = new AuthService();

class AuthController {
  // Tạo những điều hướng và phản hồi
  login(req, res, next) {
    // xử lí logic sẽ chuyển sang server

    const ret = authService.checkDataLogin(req.body.email, req.body.password);

    // gọi service và trả về kết quả
    res.status(200).send("Login successful");
  }

  register(req, res, next) {
    // xử lí logic sẽ chuyển sang server
  }

  logout() {}
}

export default AuthController;
