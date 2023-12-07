// modules/mata_pelajaran/controllers/mataPelajaranController.js
const mataPelajaranModel = require('../models/mataPelajaranModel');
const response = require('../../../utils/response');

exports.getAllMataPelajaran = async (req, res) => {
  try {
    const mataPelajaran = await mataPelajaranModel.getAllMataPelajaran();
    response.success(res, mataPelajaran);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getMataPelajaranById = async (req, res) => {
  const mataPelajaranId = req.params.id;
  try {
    const mataPelajaran = await mataPelajaranModel.getMataPelajaranById(mataPelajaranId);
    response.success(res, mataPelajaran);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createMataPelajaran = async (req, res) => {
  const mataPelajaranData = req.body;
  try {
    const newMataPelajaran = await mataPelajaranModel.createMataPelajaran(mataPelajaranData);
    response.success(res, newMataPelajaran, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateMataPelajaran = async (req, res) => {
  const mataPelajaranId = req.params.id;
  const updatedMataPelajaranData = req.body;
  try {
    const updatedMataPelajaran = await mataPelajaranModel.updateMataPelajaran(mataPelajaranId, updatedMataPelajaranData);
    response.success(res, updatedMataPelajaran);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteMataPelajaran = async (req, res) => {
  const mataPelajaranId = req.params.id;
  try {
    await mataPelajaranModel.deleteMataPelajaran(mataPelajaranId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
