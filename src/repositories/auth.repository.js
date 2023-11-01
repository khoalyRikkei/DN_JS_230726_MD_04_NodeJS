import { getData } from "../utils/db.util.js";

class AuthRepository {
  getUser() {
    const data = JSON.parse(getData("/src/models/users.json"));
    return data;
  }
}

export default AuthRepository;
