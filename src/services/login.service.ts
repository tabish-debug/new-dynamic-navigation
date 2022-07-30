import axios from 'axios';

class LoginServices {
  async rLogin() {
    const response = await axios
      .get('rLogin')
      .then((res) => res)
      .catch((err) => err.response);
    return response;
  }
}

export default new LoginServices();
