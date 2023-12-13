// modules/Kelas/controllers/KelasController.js
const KelasModel = require('../models/KelasModel');
const Response = require('../../../utils/response');

exports.getAllKelas = async (req, res) => {
  try {
    const Kelas = await KelasModel.getAllKelas();
    Response.success(res, Kelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getKelasById = async (req, res) => {
  const KelasId = req.params.id;
  try {
    const Kelas = await KelasModel.getKelasById(KelasId);
    Response.success(res, Kelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createKelas = async (req, res) => {
  const { app, name } = req.body;
  try {
    const newKelas = await KelasModel.createKelas({ app, name });
    Response.success(res, newKelas, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateKelas = async (req, res) => {
  const KelasId = req.params.id;
  const { app, name } = req.body;
  try {
    const updatedKelas = await KelasModel.updateKelas(KelasId, { app, name, updated_at: new Date() });
    Response.success(res, updatedKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteKelas = async (req, res) => {
  const KelasId = req.params.id;
  try {
    await KelasModel.deleteKelas(KelasId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};