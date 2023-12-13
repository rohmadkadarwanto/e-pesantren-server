// modules/Client/controllers/ClientController.js
const ClientModel = require('../models/ClientModel');
const Response = require('../../../utils/response');

exports.getAllClient = async (req, res) => {
  try {
    const Client = await ClientModel.getAllClient();
    Response.success(res, Client);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getClientById = async (req, res) => {
  const ClientId = req.params.id;
  try {
    const Client = await ClientModel.getClientById(ClientId);
    Response.success(res, Client);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getClientByApp = async (req, res) => {
  const ClientApp = req.params.app;
  try {
    const Client = await ClientModel.getClientByApp(ClientApp);
    Response.success(res, Client);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createClient = async (req, res) => {
  const { code, name, email, phone, website, logo, address } = req.body;
  try {
    const newClient = await ClientModel.createClient({ code, name, email, phone, website, logo, address });
    Response.success(res, newClient, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateClient = async (req, res) => {
  const ClientId = req.params.id;
  const { code, name, email, phone, website, logo, address } = req.body;
  try {
    const updatedClient = await ClientModel.updateClient(ClientId, { code, name, email, phone, website, logo, address, updated_at: new Date() });
    Response.success(res, updatedClient);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteClient = async (req, res) => {
  const ClientId = req.params.id;
  try {
    await ClientModel.deleteClient(ClientId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
