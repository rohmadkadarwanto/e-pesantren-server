// modules/asatid/controllers/asatidController.js
const asatidModel = require('../models/asatidModel');
const response = require('../../../utils/response');

exports.getAllAsatid = async (req, res) => {
  try {
    const asatid = await asatidModel.getAllAsatid();
    response.success(res, asatid);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getAsatidById = async (req, res) => {
  const asatidId = req.params.id;
  try {
    const asatid = await asatidModel.getAsatidById(asatidId);
    response.success(res, asatid);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createAsatid = async (req, res) => {
  const asatidData = req.body;
  try {
    const newAsatid = await asatidModel.createAsatid(asatidData);
    response.success(res, newAsatid, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateAsatid = async (req, res) => {
  const asatidId = req.params.id;
  const updatedAsatidData = req.body;
  try {
    const updatedAsatid = await asatidModel.updateAsatid(asatidId, updatedAsatidData);
    response.success(res, updatedAsatid);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteAsatid = async (req, res) => {
  const asatidId = req.params.id;
  try {
    await asatidModel.deleteAsatid(asatidId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
