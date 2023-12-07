// modules/kelas/controllers/kelasController.js
const kelasModel = require('../models/kelasModel');
const response = require('../../../utils/response');

exports.getAllKelas = async (req, res) => {
  try {
    const kelas = await kelasModel.getAllKelas();
    response.success(res, kelas);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getKelasById = async (req, res) => {
  const kelasId = req.params.id;
  try {
    const kelas = await kelasModel.getKelasById(kelasId);
    response.success(res, kelas);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createKelas = async (req, res) => {
  const kelasData = req.body;
  try {
    const newKelas = await kelasModel.createKelas(kelasData);
    response.success(res, newKelas, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateKelas = async (req, res) => {
  const kelasId = req.params.id;
  const updatedKelasData = req.body;
  try {
    const updatedKelas = await kelasModel.updateKelas(kelasId, updatedKelasData);
    response.success(res, updatedKelas);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteKelas = async (req, res) => {
  const kelasId = req.params.id;
  try {
    await kelasModel.deleteKelas(kelasId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
