import AuthRepository from "../repositories/auth.repository.js";

const autheRepository = new AuthRepository();

class AuthService {
  checkDataLogin(email, password) {
    // Lấy data từ repository để kiểm tra
    const getAllUser = autheRepository.getUser();

    let isLogined = false;
    let userLogin;

    getAllUser.forEach((user) => {
      if (user.email === email) {
        if (user.password === password) {
          isLogined = true;

          userLogin = { ...user };
          delete userLogin.password;
        }
      }
    });
    if (userLogin) {
      return {
        status: "success",
        data: userLogin,
        message: "Login successful",
      };
    }

    return {
      status: "Failure",
      data: null,
      message: "Login Failure",
    };
  }
}

export default AuthService;
