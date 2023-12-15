// modules/MataPelajaran/controllers/MataPelajaranController.js
const MataPelajaranModel = require('../models/MataPelajaranModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllMataPelajaran = async (req, res) => {
  try {
    const MataPelajaran = await MataPelajaranModel.getAllMataPelajaran();
    Response.success(res, MataPelajaran);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getMataPelajaranById = async (req, res) => {
  const MataPelajaranId = req.params.id;
  try {
    const MataPelajaran = await MataPelajaranModel.getMataPelajaranById(MataPelajaranId);
    Response.success(res, MataPelajaran);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createMataPelajaran = async (req, res) => {
  const { name, status } = req.body;
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  const code = 'MP' + Math.random().toString(36).substring(2, 8).toUpperCase();
  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';

    const newMataPelajaran = await MataPelajaranModel.createMataPelajaran({ app, code, name, status });
    Response.success(res, newMataPelajaran, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateMataPelajaran = async (req, res) => {
  const MataPelajaranId = req.params.id;
  const { name, status } = req.body;
  try {
    const updatedMataPelajaran = await MataPelajaranModel.updateMataPelajaran(MataPelajaranId, { name, status, updated_at: new Date() });
    Response.success(res, updatedMataPelajaran);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteMataPelajaran = async (req, res) => {
  const MataPelajaranId = req.params.id;
  try {
    await MataPelajaranModel.deleteMataPelajaran(MataPelajaranId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
