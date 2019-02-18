import models from '../db/models';

const { User } = models;

class AuthController {
  static userSignup(req, res) {
    const { fullName, username, email, password } = req.body;

    User.create({
      fullName,
      username,
      email,
      password
    })
      .then((response) => {
        res.status(201).json({
          statusText: 'Ok',
          status: 201,
          message: 'Signup successful'
        })
      })
      .catch((err) => {
        res.status(500).json({
          statusText: 'Internal server error',
          status: 500,
          message: 'A server error occured'
        })
      })
  }
}

export default AuthController;
