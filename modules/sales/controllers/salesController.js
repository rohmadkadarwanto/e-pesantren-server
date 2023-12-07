// modules/sales/controllers/salesController.js
const salesModel = require('../models/salesModel');
const response = require('../../../utils/response');

exports.getAllSales = async (req, res) => {
  try {
    const sales = await salesModel.getAllSales();
    response.success(res, sales);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getSalesById = async (req, res) => {
  const salesId = req.params.id;
  try {
    const sales = await salesModel.getSalesById(salesId);
    response.success(res, sales);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createSales = async (req, res) => {
  const salesData = req.body;
  try {
    const newSales = await salesModel.createSales(salesData);
    response.success(res, newSales, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateSales = async (req, res) => {
  const salesId = req.params.id;
  const updatedSalesData = req.body;
  try {
    const updatedSales = await salesModel.updateSales(salesId, updatedSalesData);
    response.success(res, updatedSales);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteSales = async (req, res) => {
  const salesId = req.params.id;
  try {
    await salesModel.deleteSales(salesId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
