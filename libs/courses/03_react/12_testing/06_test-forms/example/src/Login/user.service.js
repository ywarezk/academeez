/**
 * Interact with the user api
 */

import axios from 'axios';

class UserService {
  async login(emailPassword) {
    const response = await axios.post(
      'https://academeez-login-ex.herokuapp.com/api/users/login',
      emailPassword
    );
    return response.data;
  }
}

export const userService = new UserService();
