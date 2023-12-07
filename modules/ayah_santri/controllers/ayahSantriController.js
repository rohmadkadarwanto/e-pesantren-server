// modules/ayah_santri/controllers/ayahSantriController.js
const ayahSantriModel = require('../models/ayahSantriModel');
const response = require('../../../utils/response');

exports.getAllAyahSantri = async (req, res) => {
  try {
    const ayahSantri = await ayahSantriModel.getAllAyahSantri();
    response.success(res, ayahSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getAyahSantriById = async (req, res) => {
  const ayahSantriId = req.params.id;
  try {
    const ayahSantri = await ayahSantriModel.getAyahSantriById(ayahSantriId);
    response.success(res, ayahSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createAyahSantri = async (req, res) => {
  const ayahSantriData = req.body;
  try {
    const newAyahSantri = await ayahSantriModel.createAyahSantri(ayahSantriData);
    response.success(res, newAyahSantri, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateAyahSantri = async (req, res) => {
  const ayahSantriId = req.params.id;
  const updatedAyahSantriData = req.body;
  try {
    const updatedAyahSantri = await ayahSantriModel.updateAyahSantri(ayahSantriId, updatedAyahSantriData);
    response.success(res, updatedAyahSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteAyahSantri = async (req, res) => {
  const ayahSantriId = req.params.id;
  try {
    await ayahSantriModel.deleteAyahSantri(ayahSantriId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
