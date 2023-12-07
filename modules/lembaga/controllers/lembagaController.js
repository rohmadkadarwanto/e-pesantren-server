// modules/lembaga/controllers/lembagaController.js
const lembagaModel = require('../models/lembagaModel');
const response = require('../../../utils/response');

exports.getAllLembaga = async (req, res) => {
  try {
    const lembaga = await lembagaModel.getAllLembaga();
    response.success(res, lembaga);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getLembagaById = async (req, res) => {
  const lembagaId = req.params.id;
  try {
    const lembaga = await lembagaModel.getLembagaById(lembagaId);
    response.success(res, lembaga);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createLembaga = async (req, res) => {
  const lembagaData = req.body;
  try {
    const newLembaga = await lembagaModel.createLembaga(lembagaData);
    response.success(res, newLembaga, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateLembaga = async (req, res) => {
  const lembagaId = req.params.id;
  const updatedLembagaData = req.body;
  try {
    const updatedLembaga = await lembagaModel.updateLembaga(lembagaId, updatedLembagaData);
    response.success(res, updatedLembaga);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteLembaga = async (req, res) => {
  const lembagaId = req.params.id;
  try {
    await lembagaModel.deleteLembaga(lembagaId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
