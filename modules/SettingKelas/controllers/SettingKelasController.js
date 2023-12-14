// modules/SettingKelas/controllers/SettingKelasController.js
const SettingKelasModel = require('../models/SettingKelasModel');
const Response = require('../../../utils/response');

exports.getAllSettingKelas = async (req, res) => {
  try {
    const SettingKelas = await SettingKelasModel.getAllSettingKelas();
    Response.success(res, SettingKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getSettingKelasById = async (req, res) => {
  const SettingKelasId = req.params.id;
  try {
    const SettingKelas = await SettingKelasModel.getSettingKelasById(SettingKelasId);
    Response.success(res, SettingKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createSettingKelas = async (req, res) => {
  const { kelas, lembaga, status } = req.body;
  const app = 'dpi.pesantren.app';
  try {
    const newSettingKelas = await SettingKelasModel.createSettingKelas({ app, kelas, lembaga, status });
    Response.success(res, newSettingKelas, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateSettingKelas = async (req, res) => {
  const SettingKelasId = req.params.id;
  const { kelas, lembaga, status } = req.body;
  const app = 'dpi.pesantren.app';
  try {
    const updatedSettingKelas = await SettingKelasModel.updateSettingKelas(SettingKelasId, { app, kelas, lembaga, status, updated_at: new Date() });
    Response.success(res, updatedSettingKelas);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteSettingKelas = async (req, res) => {
  const SettingKelasId = req.params.id;
  try {
    await SettingKelasModel.deleteSettingKelas(SettingKelasId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
