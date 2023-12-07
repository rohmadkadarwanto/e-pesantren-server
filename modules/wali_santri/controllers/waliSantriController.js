// modules/wali_santri/controllers/waliSantriController.js
const waliSantriModel = require('../models/waliSantriModel');
const response = require('../../../utils/response');

exports.getAllWaliSantri = async (req, res) => {
  try {
    const waliSantri = await waliSantriModel.getAllWaliSantri();
    response.success(res, waliSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getWaliSantriById = async (req, res) => {
  const waliSantriId = req.params.id;
  try {
    const waliSantri = await waliSantriModel.getWaliSantriById(waliSantriId);
    response.success(res, waliSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createWaliSantri = async (req, res) => {
  const waliSantriData = req.body;
  try {
    const newWaliSantri = await waliSantriModel.createWaliSantri(waliSantriData);
    response.success(res, newWaliSantri, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateWaliSantri = async (req, res) => {
  const waliSantriId = req.params.id;
  const updatedWaliSantriData = req.body;
  try {
    const updatedWaliSantri = await waliSantriModel.updateWaliSantri(waliSantriId, updatedWaliSantriData);
    response.success(res, updatedWaliSantri);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteWaliSantri = async (req, res) => {
  const waliSantriId = req.params.id;
  try {
    await waliSantriModel.deleteWaliSantri(waliSantriId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
