// modules/coa_subaccount/controllers/coaSubaccountController.js
const coaSubaccountModel = require('../models/coaSubaccountModel');
const response = require('../../../utils/response');

exports.getAllCoaSubaccounts = async (req, res) => {
  try {
    const coaSubaccounts = await coaSubaccountModel.getAllCoaSubaccounts();
    response.success(res, coaSubaccounts);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getCoaSubaccountById = async (req, res) => {
  const coaSubaccountId = req.params.id;
  try {
    const coaSubaccount = await coaSubaccountModel.getCoaSubaccountById(coaSubaccountId);
    response.success(res, coaSubaccount);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createCoaSubaccount = async (req, res) => {
  const coaSubaccountData = req.body;
  try {
    const newCoaSubaccount = await coaSubaccountModel.createCoaSubaccount(coaSubaccountData);
    response.success(res, newCoaSubaccount, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateCoaSubaccount = async (req, res) => {
  const coaSubaccountId = req.params.id;
  const updatedCoaSubaccountData = req.body;
  try {
    const updatedCoaSubaccount = await coaSubaccountModel.updateCoaSubaccount(coaSubaccountId, updatedCoaSubaccountData);
    response.success(res, updatedCoaSubaccount);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteCoaSubaccount = async (req, res) => {
  const coaSubaccountId = req.params.id;
  try {
    await coaSubaccountModel.deleteCoaSubaccount(coaSubaccountId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
