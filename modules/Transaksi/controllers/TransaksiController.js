// modules/Transaksi/controllers/TransaksiController.js
const TransaksiModel = require('../models/TransaksiModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

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
  //const { user, account, sub_account, amount, type, keterangan, status } = req.body;
  const { user, keterangan, status } = req.body;
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  const code = 'INV' + Math.random().toString(36).substring(2, 8).toUpperCase();
  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';

    const newTransaksi = await TransaksiModel.createTransaksi({ app, code, user, keterangan, status } );
    Response.success(res, newTransaksi, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateTransaksi = async (req, res) => {
  const TransaksiId = req.params.id;
  //const { user, account, sub_account, amount, type, keterangan, status }  = req.body;
  const { user, keterangan, status }  = req.body;
  try {
    const updatedTransaksi = await TransaksiModel.updateTransaksi(TransaksiId, { user, keterangan, status, updated_at: new Date() } );
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
