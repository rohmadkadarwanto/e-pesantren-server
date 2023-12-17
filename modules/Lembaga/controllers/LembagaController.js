// modules/Lembaga/controllers/LembagaController.js
const LembagaModel = require('../models/LembagaModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllLembaga = async (req, res) => {
  try {
    const Lembaga = await LembagaModel.getAllLembaga();
    Response.success(res, Lembaga);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getLembagaByCode = async (req, res) => {
  const LembagaCode = req.params.code;
  try {
    const Lembaga = await LembagaModel.getLembagaByCode(LembagaCode);
    Response.success(res, Lembaga);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createLembaga = async (req, res) => {
  const { name } = req.body;
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  const code = 'LB' + Math.random().toString(36).substring(2, 8).toUpperCase();

  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';

    const newLembaga = await LembagaModel.createLembaga({ app, code, name });
    Response.success(res, newLembaga, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateLembaga = async (req, res) => {
  const LembagaCode = req.params.code;
  const { name } = req.body;
  try {
    const updatedLembaga = await LembagaModel.updateLembaga(LembagaCode, { name, update_at: new Date() });
    Response.success(res, updatedLembaga);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteLembaga = async (req, res) => {
  const LembagaCode = req.params.code;
  try {
    const deleteLembaga = await LembagaModel.deleteLembaga(LembagaCode);
    Response.success(res, deleteLembaga);
  } catch (error) {
    Response.error(res, error.message);
  }
};
