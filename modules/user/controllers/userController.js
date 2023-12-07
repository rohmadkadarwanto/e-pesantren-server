// modules/user/controllers/userController.js
const userModel = require('../models/userModel');
const response = require('../../../utils/response');
//const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const { username, password, email, level } = req.body;

  try {
    // Hash password before storing it in the database
    //const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password;

    const newUser = await userModel.createUser({
      username,
      password: hashedPassword,
      email,
      level,
    });

    response.success(res, newUser, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Registration failed', 500);
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      return response.error(res, 'User not found', 404);
    }

    // Compare the provided password with the hashed password in the database
    //const passwordMatch = await bcrypt.compare(password, user.password);
    const passwordMatch = user.password == password ? true : false;

    if (!passwordMatch) {
      return response.error(res, 'Invalid password', 401);
    }

    // You can generate a token or session here for authentication

    response.success(res, 'Login successful');
  } catch (error) {
    console.error(error);
    response.error(res, 'Login failed', 500);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    response.success(res, users);
  } catch (error) {
    response.error(res, error.message);
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.getUserById(userId);
    response.success(res, user);
  } catch (error) {
    response.error(res, error.message);
  }
};

/*exports.createUser = async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await userModel.createUser(userData);
    response.success(res, newUser, 201);
  } catch (error) {
    response.error(res, error.message);
  }
};*/


exports.createUser = async (req, res) => {
  const { username, password, email, status, level } = req.body;

  try {
    // Hash password before storing it in the database
    //const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password;
    const newUser = await userModel.createUser({
      username,
      password: hashedPassword,
      email,
      status,
      level,
    });

    response.success(res, newUser, 201);
  } catch (error) {
    console.error(error);
    response.error(res, error.message);
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    const updatedUser = await userModel.updateUser(userId, updatedUserData);
    response.success(res, updatedUser);
  } catch (error) {
    response.error(res, error.message);
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await userModel.deleteUser(userId);
    response.success(res, null, 204);
  } catch (error) {
    response.error(res, error.message);
  }
};
