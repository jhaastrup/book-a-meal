import models from '../db/models';

const { User } = models;

class AuthController {
  static userSignup(req, res) {
    const {
      fullName, username, email, password,
    } = req.body;

    User.create({
      fullName,
      username,
      email,
      password
    })
      .then(() => {
        res.status(201).json({
          statusText: 'Ok',
          status: 201,
          message: 'Signup successful'
        });
      })
      .catch(() => {
        res.status(500).json({
          statusText: 'Internal server error',
          status: 500,
          message: 'A server error occured'
        });
      });
  }

  static userLogin(req, res) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email
      },
    })
      .then((response) => {
        if (!response) {
          res.status(400).json({
            statusText: 'Bad Request',
            status: 400,
            message: 'Your credentials are incorrect'
          });
        }
        const userPassword = response.dataValues.password;

        if (password !== userPassword) {
          res.status(400).json({
            statusText: 'Bad Request',
            status: 400,
            message: 'Your credentials are incorrect'
          });
        } else {
          const userDetails = {
            id: response.dataValues.id,
            fullName: response.dataValues.fullName,
            username: response.dataValues.username,
            email: response.dataValues.email,
          };
          res.status(200).json({
            statusText: 'Ok',
            status: 200,
            message: 'Logged in successfully',
            data: userDetails
          });
        }
      });
  }
}

export default AuthController;
