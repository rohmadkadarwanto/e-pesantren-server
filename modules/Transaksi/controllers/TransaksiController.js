// modules/Transaksi/controllers/TransaksiController.js
const TransaksiModel = require('../models/TransaksiModel');
const Response = require('../../../utils/response');

exports.getAllTransaksi = async (req, res) => {
  try {
    const Transaksi = await TransaksiModel.getAllTransaksi();
    Response.success(res, Transaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getTransaksiById = async (req, res) => {
  const TransaksiId = req.params.id;
  try {
    const Transaksi = await TransaksiModel.getTransaksiById(TransaksiId);
    Response.success(res, Transaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createTransaksi = async (req, res) => {
  const { app, code, user, keterangan, status } = req.body;
  try {
    const newTransaksi = await TransaksiModel.createTransaksi({ app, code, user, keterangan, status } );
    Response.success(res, newTransaksi, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateTransaksi = async (req, res) => {
  const TransaksiId = req.params.id;
  const { app, code, user, keterangan, status }  = req.body;
  try {
    const updatedTransaksi = await TransaksiModel.updateTransaksi(TransaksiId, { app, code, user, keterangan, status, updated_at: new Date() } );
    Response.success(res, updatedTransaksi);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteTransaksi = async (req, res) => {
  const TransaksiId = req.params.id;
  try {
    await TransaksiModel.deleteTransaksi(TransaksiId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
