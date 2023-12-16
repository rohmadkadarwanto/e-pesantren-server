// modules/SettingKelas/controllers/SettingKelasController.js
const SettingKelasModel = require('../models/SettingKelasModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllSettingKelas = async (req, res) => {
  try {
    const SettingKelas = await SettingKelasModel.getAllSettingKelas();
    Response.success(res, SettingKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getSettingKelasById = async (req, res) => {
  const SettingKelasId = req.params.id;
  try {
    const SettingKelas = await SettingKelasModel.getSettingKelasById(SettingKelasId);
    Response.success(res, SettingKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createSettingKelas = async (req, res) => {
  const { kelas, lembaga, status } = req.body;
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';

    const newSettingKelas = await SettingKelasModel.createSettingKelas({ app, kelas, lembaga, status });
    Response.success(res, newSettingKelas, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateSettingKelas = async (req, res) => {
  const SettingKelasId = req.params.id;
  const { kelas, lembaga, status } = req.body;
  try {
    const updatedSettingKelas = await SettingKelasModel.updateSettingKelas(SettingKelasId, { kelas, lembaga, status, updated_at: new Date() });
    Response.success(res, updatedSettingKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteSettingKelas = async (req, res) => {
  const SettingKelasId = req.params.id;
  try {
    const  deleteSettingKelas = await SettingKelasModel.deleteSettingKelas(SettingKelasId);
    Response.success(res, deleteSettingKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};
