// modules/transaksi_detail/controllers/transaksiDetailController.js
const transaksiDetailModel = require('../models/transaksiDetailModel');
const response = require('../../../utils/response');

exports.getAllTransaksiDetails = async (req, res) => {
  try {
    const transaksiDetails = await transaksiDetailModel.getAllTransaksiDetails();
    response.success(res, transaksiDetails);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getTransaksiDetailById = async (req, res) => {
  const transaksiDetailId = req.params.id;
  try {
    const transaksiDetail = await transaksiDetailModel.getTransaksiDetailById(transaksiDetailId);
    response.success(res, transaksiDetail);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createTransaksiDetail = async (req, res) => {
  const transaksiDetailData = req.body;
  try {
    const newTransaksiDetail = await transaksiDetailModel.createTransaksiDetail(transaksiDetailData);
    response.success(res, newTransaksiDetail, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateTransaksiDetail = async (req, res) => {
  const transaksiDetailId = req.params.id;
  const updatedTransaksiDetailData = req.body;
  try {
    const updatedTransaksiDetail = await transaksiDetailModel.updateTransaksiDetail(
      transaksiDetailId,
      updatedTransaksiDetailData
    );
    response.success(res, updatedTransaksiDetail);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteTransaksiDetail = async (req, res) => {
  const transaksiDetailId = req.params.id;
  try {
    await transaksiDetailModel.deleteTransaksiDetail(transaksiDetailId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
