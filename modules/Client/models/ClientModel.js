const { executeQuery } = require('../../../config/db');

exports.getAllClient = () => {
  const sql = 'SELECT * FROM client';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all clients:", error);
      throw { message: "Failed to fetch all clients", error };
    });
};

exports.getClientByPackage = (clientApp) => {
  const sql = 'SELECT * FROM client WHERE app = ?';
  return executeQuery(sql, [clientApp])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching client by app:", error);
      throw { message: "Failed to fetch client by app", error };
    });
};

exports.createClient = (clientData) => {
  const sql = 'INSERT INTO client SET ?';
  return executeQuery(sql, [clientData])
    .then(results => {
      const newClient = { id: results.insertId, ...clientData };
      return newClient;
    })
    .catch(error => {
      console.error("Error creating client:", error);
      throw { message: "Failed to create client", error };
    });
};

exports.updateClient = (clientId, updatedClientData) => {
  const sql = 'UPDATE client SET ? WHERE id = ?';
  return executeQuery(sql, [updatedClientData, clientId])
    .then(() => ({ message: "Client updated successfully", id: clientId, ...updatedClientData }))
    .catch(error => {
      console.error("Error updating client:", error);
      throw { message: "Failed to update client", error };
    });
};

exports.deleteClient = (clientId) => {
  const sql = 'DELETE FROM client WHERE id = ?';
  return executeQuery(sql, [clientId])
    .then(() => ({ message: "Client deleted successfully" }))
    .catch(error => {
      console.error("Error deleting client:", error);
      throw { message: "Failed to delete client", error };
    });
};
