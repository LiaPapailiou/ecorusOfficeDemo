import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
class AuthService {
  login(username, password) {
    return axios
      .post(`/api/auth/login`, {
        username,
        password,
      }, config)
      .then((res) => {
        if (res.data.token) {
          console.log(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(`/api/auth/register`, {
      username, email, password,
    }, config);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}

export default new AuthService();