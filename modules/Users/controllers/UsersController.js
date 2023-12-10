// modules/Users/controllers/UsersController.js
const UsersModel = require('../models/UsersModel');
const Response = require('../../../utils/response');

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await UsersModel.getAllUsers();
    Response.success(res, Users);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getUsersById = async (req, res) => {
  const UsersId = req.params.id;
  try {
    const Users = await UsersModel.getUsersById(UsersId);
    Response.success(res, Users);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createUsers = async (req, res) => {
  const { username, password, email, status, level } = req.body;
  try {
    const newUsers = await UsersModel.createUsers({ username, password, email, status, level });
    Response.success(res, newUsers, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateUsers = async (req, res) => {
  const UsersId = req.params.id;
  const { username, password, email, status, level } = req.body;
  try {
    const updatedUsers = await UsersModel.updateUsers(UsersId, { username, password, email, status, level, updated_at: new Date() });
    Response.success(res, updatedUsers);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteUsers = async (req, res) => {
  const UsersId = req.params.id;
  try {
    await UsersModel.deleteUsers(UsersId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
