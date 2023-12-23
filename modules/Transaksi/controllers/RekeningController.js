const RekeningModel = require('../models/RekeningModel');
const Response = require('../../../utils/response');

exports.getAllRekening = async (req, res) => {
  try {
    const rekening = await RekeningModel.getAllRekening();
    Response.success(res, rekening);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getRekeningByRekening = async (req, res) => {
  const rekeningId = req.params.rekening;
  try {
    const rekening = await RekeningModel.getRekeningByRekening(rekeningId);
    Response.success(res, rekening);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createRekening = async (req, res) => {
  const { type, nasabah_code } = req.body;
  const rekeningData = { type, nasabah_code };
  try {
    const newRekening = await RekeningModel.createRekening(rekeningData);
    Response.success(res, newRekening, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateRekening = async (req, res) => {
  const rekeningId = req.params.code;
  const { type, nasabah_code } = req.body;
  const updatedRekeningData = { type, nasabah_code };
  try {
    const updatedRekening = await RekeningModel.updateRekening(rekeningId, updatedRekeningData);
    Response.success(res, updatedRekening);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteRekening = async (req, res) => {
  const rekeningId = req.params.rekening;
  try {
    await RekeningModel.deleteRekening(rekeningId);
    Response.success(res, null, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};
