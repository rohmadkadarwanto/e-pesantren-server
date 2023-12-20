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

exports.getClientByPackage = async (req, res) => {
  const ClientPackage = req.params.package;
  try {
    const Client = await ClientModel.getClientByPackage(ClientPackage);
    Response.success(res, Client);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createClient = async (req, res) => {
  const { name, email, phone, website, address } = req.body;
  const code = 'CLN' + Math.random().toString(36).substring(2, 8).toUpperCase();
  try {
    // Jika file tidak diunggah, Anda dapat mengaturnya ke nilai default atau memberikan tanggapan kesalahan sesuai kebutuhan
    const logo = req.file ? req.file.filename : 'default-logo.jpg';

    const newClient = await ClientModel.createClient({ code, name, email, phone, website, logo, address });
    Response.success(res, newClient, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateClient = async (req, res) => {
  const ClientId = req.params.package;
  const { name, email, phone, website, address } = req.body;
  console.error(ClientId);
  try {
    // Jika file tidak diunggah, Anda dapat mengaturnya ke nilai default atau memberikan tanggapan kesalahan sesuai kebutuhan
    const logo = req.file ? req.file.filename : '';
    if(!logo) {
      const updatedClient = await ClientModel.updateClient(ClientId, { name, email, phone, website, address, updated_at: new Date() });
    } else {
      const updatedClient = await ClientModel.updateClient(ClientId, { name, email, phone, website, logo, address, updated_at: new Date() });
    }
    Response.success(res, updatedClient);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteClient = async (req, res) => {
  const ClientId = req.params.id;
  try {
    const deleteClient = await ClientModel.deleteClient(ClientId);
    Response.success(res, deleteClient);
  } catch (error) {
    Response.error(res, error.message);
  }
};
