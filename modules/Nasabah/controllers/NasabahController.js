// controllers/NasabahController.js
const NasabahModel = require('../models/NasabahModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllNasabah = async (req, res) => {
  try {
    const nasabah = await NasabahModel.getAllNasabah();
    Response.success(res, nasabah);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getNasabahByCode = async (req, res) => {
  const nasabahCode = req.params.code;
  try {
    const nasabah = await NasabahModel.getNasabahByCode(nasabahCode);
    Response.success(res, nasabah);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createNasabah = async (req, res) => {
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  const { nama, type, phone, email, pekerjaan, alamat} = req.body;
  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';
    const newNasabah = await NasabahModel.createNasabah({ nama, type, app, phone, email, pekerjaan, alamat});
    Response.success(res, newNasabah, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateNasabah = async (req, res) => {
  const nasabahCode = req.params.code;
  const { nama, type, phone, email, pekerjaan, alamat} = req.body;
  try {
    const updatedNasabah = await NasabahModel.updateNasabah(nasabahCode, { nama, type, phone, email, pekerjaan, alamat});
    Response.success(res, updatedNasabah);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteNasabah = async (req, res) => {
  const nasabahCode = req.params.code;
  try {
    await NasabahModel.deleteNasabah(nasabahCode);
    Response.success(res, null, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};
