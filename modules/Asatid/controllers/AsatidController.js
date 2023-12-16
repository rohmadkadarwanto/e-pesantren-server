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

exports.getAsatidByNip = async (req, res) => {
  const AsatidNip = req.params.nip;
  try {
    const Asatid = await AsatidModel.getAsatidById(AsatidNip);
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
  const AsatidNip = req.params.nip;
  const { nip, name, email, phone, address, status } = req.body;
  try {
    const updatedAsatid = await AsatidModel.updateAsatid(AsatidNip, { nip, name, email, phone, address, status, updated_at: new Date() });
    Response.success(res, updatedAsatid);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteAsatid = async (req, res) => {
  const AsatidNip = req.params.nip;
  try {
    const deleteAsatid = await AsatidModel.deleteAsatid(AsatidNip);
    Response.success(res, deleteAsatid);
  } catch (error) {
    Response.error(res, error.message);
  }
};
