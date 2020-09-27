export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (user && user.token) {
    config.headers["Authorization"] = `Token ${user.token}`;
  }

  return config;
}
