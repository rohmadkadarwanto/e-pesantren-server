// modules/IbuSantri/controllers/IbuSantriController.js
const IbuSantriModel = require('../models/IbuSantriModel');
const Response = require('../../../utils/response');

exports.getAllIbuSantri = async (req, res) => {
  try {
    const IbuSantri = await IbuSantriModel.getAllIbuSantri();
    Response.success(res, IbuSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getIbuSantriById = async (req, res) => {
  const IbuSantriId = req.params.id;
  try {
    const IbuSantri = await IbuSantriModel.getIbuSantriById(IbuSantriId);
    Response.success(res, IbuSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createIbuSantri = async (req, res) => {
  const { nis, nama, pekerjaan, alamat } = req.body;
  try {
    const newIbuSantri = await IbuSantriModel.createIbuSantri({ nis, nama, pekerjaan, alamat });
    Response.success(res, newIbuSantri, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateIbuSantri = async (req, res) => {
  const IbuSantriId = req.params.id;
  const { nis, nama, pekerjaan, alamat } = req.body;
  try {
    const updatedIbuSantri = await IbuSantriModel.updateIbuSantri(IbuSantriId, { nis, nama, pekerjaan, alamat, updated_at: new Date() });
    Response.success(res, updatedIbuSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteIbuSantri = async (req, res) => {
  const IbuSantriId = req.params.id;
  try {
    await IbuSantriModel.deleteIbuSantri(IbuSantriId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
