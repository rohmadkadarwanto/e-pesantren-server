// modules/Kelas/controllers/KelasController.js
const KelasModel = require('../models/KelasModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllKelas = async (req, res) => {
  try {
    const Kelas = await KelasModel.getAllKelas();
    Response.success(res, Kelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getKelasById = async (req, res) => {
  const KelasId = req.params.id;
  try {
    const Kelas = await KelasModel.getKelasById(KelasId);
    Response.success(res, Kelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createKelas = async (req, res) => {
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  const { name, status } = req.body;

  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';
    const newKelas = await KelasModel.createKelas({ app, name, status });

    return Response.success(res, newKelas, 201);
  } catch (error) {
    console.error(error);
    return Response.error(res, 'Internal server error', 500);
  }
};

exports.updateKelas = async (req, res) => {
  const KelasId = req.params.id;
  const { name, status } = req.body;
  try {
    const updatedKelas = await KelasModel.updateKelas(KelasId, { name, status, updated_at: new Date() });
    Response.success(res, updatedKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteKelas = async (req, res) => {
  const KelasId = req.params.id;
  try {
    await KelasModel.deleteKelas(KelasId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
