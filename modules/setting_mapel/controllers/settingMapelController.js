// modules/setting_mapel/controllers/settingMapelController.js
const settingMapelModel = require('../models/settingMapelModel');
const response = require('../../../utils/response');

exports.getAllSettingMapel = async (req, res) => {
  try {
    const settingMapel = await settingMapelModel.getAllSettingMapel();
    response.success(res, settingMapel);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getSettingMapelById = async (req, res) => {
  const settingMapelId = req.params.id;
  try {
    const settingMapel = await settingMapelModel.getSettingMapelById(settingMapelId);
    response.success(res, settingMapel);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createSettingMapel = async (req, res) => {
  const settingMapelData = req.body;
  try {
    const newSettingMapel = await settingMapelModel.createSettingMapel(settingMapelData);
    response.success(res, newSettingMapel, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateSettingMapel = async (req, res) => {
  const settingMapelId = req.params.id;
  const updatedSettingMapelData = req.body;
  try {
    const updatedSettingMapel = await settingMapelModel.updateSettingMapel(settingMapelId, updatedSettingMapelData);
    response.success(res, updatedSettingMapel);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteSettingMapel = async (req, res) => {
  const settingMapelId = req.params.id;
  try {
    await settingMapelModel.deleteSettingMapel(settingMapelId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
