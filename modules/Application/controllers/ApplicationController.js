// modules/Application/controllers/ApplicationController.js
const crypto = require('crypto');
const ApplicationModel = require('../models/ApplicationModel');
const Response = require('../../../utils/response');

exports.getAllApplication = async (req, res) => {
  try {
    const applications = await ApplicationModel.getAllApplication();
    Response.success(res, applications);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getApplicationById = async (req, res) => {
  const applicationId = req.params.id;
  try {
    const application = await ApplicationModel.getApplicationById(applicationId);
    Response.success(res, application);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getApplicationByPackage = async (req, res) => {
  const applicationPackage= req.params.package;
  try {
    const application = await ApplicationModel.getApplicationByPackage(applicationPackage);
    Response.success(res, application);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createApplication = async (req, res) => {
  const { name, package, client, status, type } = req.body;

  // Generate MD5 hash for name, package, and client
  const md5Hash = crypto.createHash('md5');
  const key = md5Hash.update(name + package + client).digest('hex');

  try {
    const newApplication = await ApplicationModel.createApplication({ name, package, client, key, status, type });
    Response.success(res, newApplication, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateApplication = async (req, res) => {
  const applicationId = req.params.id;
  const { name, package, client, status, type } = req.body;

  // Generate MD5 hash for name, package, and client
  const md5Hash = crypto.createHash('md5');
  const key = md5Hash.update(name + package + client).digest('hex');

  try {
    // Assuming 'updated_at' is a field you want to update
    const updatedApplication = await ApplicationModel.updateApplication(applicationId, { name, package, client, key, status, type, updated_at: new Date() });
    Response.success(res, updatedApplication);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteApplication = async (req, res) => {
  const applicationId = req.params.id;
  try {
    const deleteApplication = await ApplicationModel.deleteApplication(applicationId);
    Response.success(res, deleteApplication);
  } catch (error) {
    Response.error(res, error.message);
  }
};
