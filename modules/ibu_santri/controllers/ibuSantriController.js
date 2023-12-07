// modules/ibu_santri/controllers/ibuSantriController.js
const ibuSantriModel = require('../models/ibuSantriModel');
const response = require('../../../utils/response');

exports.getAllIbuSantri = async (req, res) => {
  try {
    const ibuSantri = await ibuSantriModel.getAllIbuSantri();
    response.success(res, ibuSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getIbuSantriById = async (req, res) => {
  const ibuSantriId = req.params.id;
  try {
    const ibuSantri = await ibuSantriModel.getIbuSantriById(ibuSantriId);
    response.success(res, ibuSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createIbuSantri = async (req, res) => {
  const ibuSantriData = req.body;
  try {
    const newIbuSantri = await ibuSantriModel.createIbuSantri(ibuSantriData);
    response.success(res, newIbuSantri, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateIbuSantri = async (req, res) => {
  const ibuSantriId = req.params.id;
  const updatedIbuSantriData = req.body;
  try {
    const updatedIbuSantri = await ibuSantriModel.updateIbuSantri(ibuSantriId, updatedIbuSantriData);
    response.success(res, updatedIbuSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteIbuSantri = async (req, res) => {
  const ibuSantriId = req.params.id;
  try {
    await ibuSantriModel.deleteIbuSantri(ibuSantriId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
