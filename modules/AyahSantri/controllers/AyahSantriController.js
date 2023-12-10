// modules/AyahSantri/controllers/AyahSantriController.js
const AyahSantriModel = require('../models/AyahSantriModel');
const Response = require('../../../utils/response');

exports.getAllAyahSantri = async (req, res) => {
  try {
    const AyahSantri = await AyahSantriModel.getAllAyahSantri();
    Response.success(res, AyahSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getAyahSantriById = async (req, res) => {
  const AyahSantriId = req.params.id;
  try {
    const AyahSantri = await AyahSantriModel.getAyahSantriById(AyahSantriId);
    Response.success(res, AyahSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createAyahSantri = async (req, res) => {
  const { nis, nama, pekerjaan, alamat } = req.body;
  try {
    const newAyahSantri = await AyahSantriModel.createAyahSantri({ nis, nama, pekerjaan, alamat });
    Response.success(res, newAyahSantri, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateAyahSantri = async (req, res) => {
  const AyahSantriId = req.params.id;
  const { nis, nama, pekerjaan, alamat, updated_at } = req.body;
  try {
    const updatedAyahSantri = await AyahSantriModel.updateAyahSantri(AyahSantriId, { nis, nama, pekerjaan, alamat, updated_at: new Date() });
    Response.success(res, updatedAyahSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteAyahSantri = async (req, res) => {
  const AyahSantriId = req.params.id;
  try {
    await AyahSantriModel.deleteAyahSantri(AyahSantriId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
