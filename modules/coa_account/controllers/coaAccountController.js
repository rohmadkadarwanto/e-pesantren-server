// modules/coa_account/controllers/coaAccountController.js
const coaAccountModel = require('../models/coaAccountModel');
const response = require('../../../utils/response');

exports.getAllCoaAccounts = async (req, res) => {
  try {
    const coaAccounts = await coaAccountModel.getAllCoaAccounts();
    response.success(res, coaAccounts);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getCoaAccountById = async (req, res) => {
  const coaAccountId = req.params.id;
  try {
    const coaAccount = await coaAccountModel.getCoaAccountById(coaAccountId);
    response.success(res, coaAccount);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createCoaAccount = async (req, res) => {
  const coaAccountData = req.body;
  try {
    const newCoaAccount = await coaAccountModel.createCoaAccount(coaAccountData);
    response.success(res, newCoaAccount, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateCoaAccount = async (req, res) => {
  const coaAccountId = req.params.id;
  const updatedCoaAccountData = req.body;
  try {
    const updatedCoaAccount = await coaAccountModel.updateCoaAccount(coaAccountId, updatedCoaAccountData);
    response.success(res, updatedCoaAccount);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteCoaAccount = async (req, res) => {
  const coaAccountId = req.params.id;
  try {
    await coaAccountModel.deleteCoaAccount(coaAccountId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
