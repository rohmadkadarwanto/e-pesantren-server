// modules/client/controllers/clientController.js
const clientModel = require('../models/clientModel');
const response = require('../../../utils/response');

exports.getAllClients = async (req, res) => {
  try {
    const clients = await clientModel.getAllClients();
    response.success(res, clients);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getClientById = async (req, res) => {
  const clientId = req.params.id;
  try {
    const client = await clientModel.getClientById(clientId);
    response.success(res, client);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createClient = async (req, res) => {
  const clientData = req.body;
  try {
    const newClient = await clientModel.createClient(clientData);
    response.success(res, newClient, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateClient = async (req, res) => {
  const clientId = req.params.id;
  const updatedClientData = req.body;
  try {
    const updatedClient = await clientModel.updateClient(clientId, updatedClientData);
    response.success(res, updatedClient);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteClient = async (req, res) => {
  const clientId = req.params.id;
  try {
    await clientModel.deleteClient(clientId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
