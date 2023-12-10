// modules/SettingMapel/controllers/SettingMapelController.js
const SettingMapelModel = require('../models/SettingMapelModel');
const Response = require('../../../utils/response');

exports.getAllSettingMapel = async (req, res) => {
  try {
    const SettingMapel = await SettingMapelModel.getAllSettingMapel();
    Response.success(res, SettingMapel);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getSettingMapelById = async (req, res) => {
  const SettingMapelId = req.params.id;
  try {
    const SettingMapel = await SettingMapelModel.getSettingMapelById(SettingMapelId);
    Response.success(res, SettingMapel);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createSettingMapel = async (req, res) => {
  const { app, kelas, lembaga, mapel, asatid, status } = req.body;
  try {
    const newSettingMapel = await SettingMapelModel.createSettingMapel({ app, kelas, lembaga, mapel, asatid, status });
    Response.success(res, newSettingMapel, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateSettingMapel = async (req, res) => {
  const SettingMapelId = req.params.id;
  const { app, kelas, lembaga, mapel, asatid, status } = req.body;
  try {
    const updatedSettingMapel = await SettingMapelModel.updateSettingMapel(SettingMapelId, { app, kelas, lembaga, mapel, asatid, status, updated_at: new Date() });
    Response.success(res, updatedSettingMapel);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteSettingMapel = async (req, res) => {
  const SettingMapelId = req.params.id;
  try {
    await SettingMapelModel.deleteSettingMapel(SettingMapelId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
