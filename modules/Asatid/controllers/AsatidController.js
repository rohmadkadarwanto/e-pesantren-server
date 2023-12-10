// modules/Asatid/controllers/AsatidController.js
const AsatidModel = require('../models/AsatidModel');
const Response = require('../../../utils/response');

exports.getAllAsatid = async (req, res) => {
  try {
    const Asatid = await AsatidModel.getAllAsatid();
    Response.success(res, Asatid);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getAsatidById = async (req, res) => {
  const AsatidId = req.params.id;
  try {
    const Asatid = await AsatidModel.getAsatidById(AsatidId);
    Response.success(res, Asatid);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createAsatid = async (req, res) => {
  const { nip, name, email, phone, address, status } = req.body;
  try {
    const newAsatid = await AsatidModel.createAsatid({ nip, name, email, phone, address, status });
    Response.success(res, newAsatid, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateAsatid = async (req, res) => {
  const AsatidId = req.params.id;
  const { nip, name, email, phone, address, status } = req.body;
  try {
    const updatedAsatid = await AsatidModel.updateAsatid(AsatidId, { nip, name, email, phone, address, status, updated_at: new Date() });
    Response.success(res, updatedAsatid);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteAsatid = async (req, res) => {
  const AsatidId = req.params.id;
  try {
    await AsatidModel.deleteAsatid(AsatidId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
