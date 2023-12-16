// modules/CoaAccount/controllers/CoaAccountController.js
const CoaAccountModel = require('../models/CoaAccountModel');
const Response = require('../../../utils/response');

exports.getAllCoaAccount = async (req, res) => {
  try {
    const CoaAccount = await CoaAccountModel.getAllCoaAccount();
    Response.success(res, CoaAccount);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getCoaAccountById = async (req, res) => {
  const CoaAccountId = req.params.id;
  try {
    const CoaAccount = await CoaAccountModel.getCoaAccountById(CoaAccountId);
    Response.success(res, CoaAccount);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createCoaAccount = async (req, res) => {
  const { code, name, type, normal_balance } = req.body;
  try {
    const newCoaAccount = await CoaAccountModel.createCoaAccount({ code, name, type, normal_balance });
    Response.success(res, newCoaAccount, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateCoaAccount = async (req, res) => {
  const CoaAccountId = req.params.id;
  const { code, name, type, normal_balance } = req.body;
  try {
    const updatedCoaAccount = await CoaAccountModel.updateCoaAccount(CoaAccountId, { code, name, type, normal_balance, updated_at: new Date() });
    Response.success(res, updatedCoaAccount);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteCoaAccount = async (req, res) => {
  const CoaAccountId = req.params.id;
  try {
    const deleteCoaAccount = await CoaAccountModel.deleteCoaAccount(CoaAccountId);
    Response.success(res, deleteCoaAccount);
  } catch (error) {
    Response.error(res, error.message);
  }
};
