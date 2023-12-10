// modules/Lembaga/controllers/LembagaController.js
const LembagaModel = require('../models/LembagaModel');
const Response = require('../../../utils/response');

exports.getAllLembaga = async (req, res) => {
  try {
    const Lembaga = await LembagaModel.getAllLembaga();
    Response.success(res, Lembaga);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getLembagaById = async (req, res) => {
  const LembagaId = req.params.id;
  try {
    const Lembaga = await LembagaModel.getLembagaById(LembagaId);
    Response.success(res, Lembaga);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createLembaga = async (req, res) => {
  const { app, code, name } = req.body;
  try {
    const newLembaga = await LembagaModel.createLembaga({ app, code, name });
    Response.success(res, newLembaga, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateLembaga = async (req, res) => {
  const LembagaId = req.params.id;
  const { app, code, name } = req.body;
  try {
    const updatedLembaga = await LembagaModel.updateLembaga(LembagaId, { app, code, name, update_at: new Date() });
    Response.success(res, updatedLembaga);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteLembaga = async (req, res) => {
  const LembagaId = req.params.id;
  try {
    await LembagaModel.deleteLembaga(LembagaId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
