// modules/TransaksiDetail/controllers/TransaksiDetailController.js
const TransaksiDetailModel = require('../models/TransaksiDetailModel');
const Response = require('../../../utils/response');

exports.getAllTransaksiDetail = async (req, res) => {
  try {
    const TransaksiDetail = await TransaksiDetailModel.getAllTransaksiDetail();
    Response.success(res, TransaksiDetail);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getTransaksiDetailById = async (req, res) => {
  const TransaksiDetailId = req.params.id;
  try {
    const TransaksiDetail = await TransaksiDetailModel.getTransaksiDetailById(TransaksiDetailId);
    Response.success(res, TransaksiDetail);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createTransaksiDetail = async (req, res) => {
  const { transaksi, account, sub_account, amount, type } = req.body;
  try {
    const newTransaksiDetail = await TransaksiDetailModel.createTransaksiDetail({ transaksi, account, sub_account, amount, type });
    Response.success(res, newTransaksiDetail, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateTransaksiDetail = async (req, res) => {
  const TransaksiDetailId = req.params.id;
  const { transaksi, account, sub_account, amount, type } = req.body;
  try {
    const updatedTransaksiDetail = await TransaksiDetailModel.updateTransaksiDetail(TransaksiDetailId, { transaksi, account, sub_account, amount, type, updated_at: new Date() });
    Response.success(res, updatedTransaksiDetail);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteTransaksiDetail = async (req, res) => {
  const TransaksiDetailId = req.params.id;
  try {
    await TransaksiDetailModel.deleteTransaksiDetail(TransaksiDetailId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
