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
  const { name, lembaga, status } = req.body;

  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';
    const newKelas = await KelasModel.createKelas({ app, name, lembaga,status });

    return Response.success(res, newKelas);
  } catch (error) {
    console.error(error);
    return Response.error(res, 'Internal server error', 500);
  }
};

exports.updateKelas = async (req, res) => {
  const KelasId = req.params.id;
  const { name, lembaga,status } = req.body;
  try {
    const updatedKelas = await KelasModel.updateKelas(KelasId, { name, lembaga, status, updated_at: new Date() });
    Response.success(res, updatedKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteKelas = async (req, res) => {
  const KelasId = req.params.id;
  try {
    const deleteKelas = await KelasModel.deleteKelas(KelasId);
    Response.success(res, deleteKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};
