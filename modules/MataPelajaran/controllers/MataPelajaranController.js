// modules/MataPelajaran/controllers/MataPelajaranController.js
const MataPelajaranModel = require('../models/MataPelajaranModel');
const Response = require('../../../utils/response');

exports.getAllMataPelajaran = async (req, res) => {
  try {
    const MataPelajaran = await MataPelajaranModel.getAllMataPelajaran();
    Response.success(res, MataPelajaran);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getMataPelajaranById = async (req, res) => {
  const MataPelajaranId = req.params.id;
  try {
    const MataPelajaran = await MataPelajaranModel.getMataPelajaranById(MataPelajaranId);
    Response.success(res, MataPelajaran);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createMataPelajaran = async (req, res) => {
  const { code, kelas, name, status } = req.body;
  const app = 'dpi.pesantren.app';
  try {
    const newMataPelajaran = await MataPelajaranModel.createMataPelajaran({ app, code, kelas, name, status });
    Response.success(res, newMataPelajaran, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateMataPelajaran = async (req, res) => {
  const MataPelajaranId = req.params.id;
  const { code, kelas, name, status } = req.body;

  const app = 'dpi.pesantren.app';
  try {
    const updatedMataPelajaran = await MataPelajaranModel.updateMataPelajaran(MataPelajaranId, { code, app, kelas, name, status, updated_at: new Date() });
    Response.success(res, updatedMataPelajaran);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteMataPelajaran = async (req, res) => {
  const MataPelajaranId = req.params.id;
  try {
    await MataPelajaranModel.deleteMataPelajaran(MataPelajaranId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
