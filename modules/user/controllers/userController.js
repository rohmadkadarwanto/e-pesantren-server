// modules/user/controllers/userController.js
const userModel = require('../models/userModel');
const response = require('../../../utils/response');

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

exports.createUser = async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await userModel.createUser(userData);
    response.success(res, newUser, 201);
  } catch (error) {
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
