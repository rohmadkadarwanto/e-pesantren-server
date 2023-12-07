// modules/aplikasi/controllers/aplikasiController.js
const aplikasiModel = require('../models/aplikasiModel');
const response = require('../../../utils/response');

exports.getAllAplikasi = async (req, res) => {
  try {
    const aplikasi = await aplikasiModel.getAllAplikasi();
    response.success(res, aplikasi);
  } catch (error) {
    response.error(res, error.message);
  }
};

exports.getAplikasiById = async (req, res) => {
  const aplikasiId = req.params.id;
  try {
    const aplikasi = await aplikasiModel.getAplikasiById(aplikasiId);
    response.success(res, aplikasi);
  } catch (error) {
    response.error(res, error.message);
  }
};

exports.createAplikasi = async (req, res) => {
  const aplikasiData = req.body;
  try {
    const newAplikasi = await aplikasiModel.createAplikasi(aplikasiData);
    response.success(res, newAplikasi, 201);
  } catch (error) {
    response.error(res, error.message);
  }
};

exports.updateAplikasi = async (req, res) => {
  const aplikasiId = req.params.id;
  const updatedAplikasiData = req.body;
  try {
    const updatedAplikasi = await aplikasiModel.updateAplikasi(aplikasiId, updatedAplikasiData);
    response.success(res, updatedAplikasi);
  } catch (error) {
    response.error(res, error.message);
  }
};
