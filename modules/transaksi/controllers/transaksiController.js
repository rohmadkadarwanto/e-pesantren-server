// modules/transaksi/controllers/transaksiController.js
const transaksiModel = require('../models/transaksiModel');
const response = require('../../../utils/response');

exports.getAllTransaksi = async (req, res) => {
  try {
    const transaksi = await transaksiModel.getAllTransaksi();
    response.success(res, transaksi);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getTransaksiById = async (req, res) => {
  const transaksiId = req.params.id;
  try {
    const transaksi = await transaksiModel.getTransaksiById(transaksiId);
    response.success(res, transaksi);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createTransaksi = async (req, res) => {
  const transaksiData = req.body;
  try {
    const newTransaksi = await transaksiModel.createTransaksi(transaksiData);
    response.success(res, newTransaksi, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateTransaksi = async (req, res) => {
  const transaksiId = req.params.id;
  const updatedTransaksiData = req.body;
  try {
    const updatedTransaksi = await transaksiModel.updateTransaksi(transaksiId, updatedTransaksiData);
    response.success(res, updatedTransaksi);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteTransaksi = async (req, res) => {
  const transaksiId = req.params.id;
  try {
    await transaksiModel.deleteTransaksi(transaksiId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
