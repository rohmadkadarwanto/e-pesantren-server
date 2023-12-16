// modules/Sales/controllers/SalesController.js
const SalesModel = require('../models/SalesModel');
const Response = require('../../../utils/response');

exports.getAllSales = async (req, res) => {
  try {
    const Sales = await SalesModel.getAllSales();
    Response.success(res, Sales);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getSalesById = async (req, res) => {
  const SalesId = req.params.id;
  try {
    const Sales = await SalesModel.getSalesById(SalesId);
    Response.success(res, Sales);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createSales = async (req, res) => {
  const { users, application, status } = req.body;
  try {
    const newSales = await SalesModel.createSales({ users, application, status });
    Response.success(res, newSales, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateSales = async (req, res) => {
  const SalesId = req.params.id;
  const { users, application, status } = req.body;
  try {
    const updatedSales = await SalesModel.updateSales(SalesId, { users, application, status, updated_at: new Date() });
    Response.success(res, updatedSales);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteSales = async (req, res) => {
  const SalesId = req.params.id;
  try {
    const deleteSales = await SalesModel.deleteSales(SalesId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
