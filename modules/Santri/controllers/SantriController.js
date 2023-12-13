// modules/Santri/controllers/SantriController.js
const SantriModel = require('../models/SantriModel');
const Response = require('../../../utils/response');

exports.getAllSantri = async (req, res) => {
  try {
    const Santri = await SantriModel.getAllSantri();
    Response.success(res, Santri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getSantriById = async (req, res) => {
  const SantriId = req.params.id;
  try {
    const Santri = await SantriModel.getSantriById(SantriId);
    Response.success(res, Santri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getSantriByNis = async (req, res) => {
  const SantriNis = req.params.nis;
  try {
    const Santri = await SantriModel.getSantriByNis(SantriNis);
    Response.success(res, Santri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createSantri = async (req, res) => {
  const { nis, app, name, tmp_lahir, tgl_lahir, address, status } = req.body;
  try {
    const newSantri = await SantriModel.createSantri({ nis, app, name, tmp_lahir, tgl_lahir, address, status });
    Response.success(res, newSantri, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateSantri = async (req, res) => {
  const SantriId = req.params.id;
  const { nis, app, name, tmp_lahir, tgl_lahir, address, status } = req.body;
  try {
    const updatedSantri = await SantriModel.updateSantri(SantriId, { nis, app, name, tmp_lahir, tgl_lahir, address, status, updated_at: new Date() });
    Response.success(res, updatedSantri);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteSantri = async (req, res) => {
  const SantriId = req.params.id;
  try {
    await SantriModel.deleteSantri(SantriId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
