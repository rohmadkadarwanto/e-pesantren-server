// modules/santri/controllers/santriController.js
const santriModel = require('../models/santriModel');
const response = require('../../../utils/response');

exports.getAllSantri = async (req, res) => {
  try {
    const santri = await santriModel.getAllSantri();
    response.success(res, santri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getSantriById = async (req, res) => {
  const santriId = req.params.id;
  try {
    const santri = await santriModel.getSantriById(santriId);
    response.success(res, santri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createSantri = async (req, res) => {
  const santriData = req.body;
  try {
    const newSantri = await santriModel.createSantri(santriData);
    response.success(res, newSantri, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateSantri = async (req, res) => {
  const santriId = req.params.id;
  const updatedSantriData = req.body;
  try {
    const updatedSantri = await santriModel.updateSantri(santriId, updatedSantriData);
    response.success(res, updatedSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteSantri = async (req, res) => {
  const santriId = req.params.id;
  try {
    await santriModel.deleteSantri(santriId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
