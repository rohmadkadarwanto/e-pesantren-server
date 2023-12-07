// modules/setting_kelas/controllers/settingKelasController.js
const settingKelasModel = require('../models/settingKelasModel');
const response = require('../../../utils/response');

exports.getAllSettingKelas = async (req, res) => {
  try {
    const settingKelas = await settingKelasModel.getAllSettingKelas();
    response.success(res, settingKelas);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getSettingKelasById = async (req, res) => {
  const settingKelasId = req.params.id;
  try {
    const settingKelas = await settingKelasModel.getSettingKelasById(settingKelasId);
    response.success(res, settingKelas);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createSettingKelas = async (req, res) => {
  const settingKelasData = req.body;
  try {
    const newSettingKelas = await settingKelasModel.createSettingKelas(settingKelasData);
    response.success(res, newSettingKelas, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateSettingKelas = async (req, res) => {
  const settingKelasId = req.params.id;
  const updatedSettingKelasData = req.body;
  try {
    const updatedSettingKelas = await settingKelasModel.updateSettingKelas(settingKelasId, updatedSettingKelasData);
    response.success(res, updatedSettingKelas);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteSettingKelas = async (req, res) => {
  const settingKelasId = req.params.id;
  try {
    await settingKelasModel.deleteSettingKelas(settingKelasId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
