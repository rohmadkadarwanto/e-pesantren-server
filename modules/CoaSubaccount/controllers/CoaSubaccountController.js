// modules/CoaSubaccount/controllers/CoaSubaccountController.js
const CoaSubaccountModel = require('../models/CoaSubaccountModel');
const Response = require('../../../utils/response');

exports.getAllCoaSubaccount = async (req, res) => {
  try {
    const CoaSubaccount = await CoaSubaccountModel.getAllCoaSubaccount();
    Response.success(res, CoaSubaccount);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getCoaSubaccountById = async (req, res) => {
  const CoaSubaccountId = req.params.id;
  try {
    const CoaSubaccount = await CoaSubaccountModel.getCoaSubaccountById(CoaSubaccountId);
    Response.success(res, CoaSubaccount);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createCoaSubaccount = async (req, res) => {
  const { account_code, code, name } = req.body;
  try {
    const newCoaSubaccount = await CoaSubaccountModel.createCoaSubaccount({ account_code, code, name });
    Response.success(res, newCoaSubaccount, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateCoaSubaccount = async (req, res) => {
  const CoaSubaccountId = req.params.id;
  const { account_code, code, name } = req.body;
  try {
    const updatedCoaSubaccount = await CoaSubaccountModel.updateCoaSubaccount(CoaSubaccountId, { account_code, code, name, updated_at: new Date() });
    Response.success(res, updatedCoaSubaccount);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteCoaSubaccount = async (req, res) => {
  const CoaSubaccountId = req.params.id;
  try {
    await CoaSubaccountModel.deleteCoaSubaccount(CoaSubaccountId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
