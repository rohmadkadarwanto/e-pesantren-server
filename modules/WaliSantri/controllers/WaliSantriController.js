// modules/WaliSantri/controllers/WaliSantriController.js
const WaliSantriModel = require('../models/WaliSantriModel');
const Response = require('../../../utils/response');

exports.getAllWaliSantri = async (req, res) => {
  try {
    const WaliSantri = await WaliSantriModel.getAllWaliSantri();
    Response.success(res, WaliSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getWaliSantriById = async (req, res) => {
  const WaliSantriId = req.params.id;
  try {
    const WaliSantri = await WaliSantriModel.getWaliSantriById(WaliSantriId);
    Response.success(res, WaliSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createWaliSantri = async (req, res) => {
  const { nis, nama, pekerjaan, alamat } = req.body;
  try {
    const newWaliSantri = await WaliSantriModel.createWaliSantri({ nis, nama, pekerjaan, alamat });
    Response.success(res, newWaliSantri, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateWaliSantri = async (req, res) => {
  const WaliSantriId = req.params.id;
  const { nis, nama, pekerjaan, alamat } = req.body;
  try {
    const updatedWaliSantri = await WaliSantriModel.updateWaliSantri(WaliSantriId, { nis, nama, pekerjaan, alamat, updated_at: new Date() });
    Response.success(res, updatedWaliSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteWaliSantri = async (req, res) => {
  const WaliSantriId = req.params.id;
  try {
    await WaliSantriModel.deleteWaliSantri(WaliSantriId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
