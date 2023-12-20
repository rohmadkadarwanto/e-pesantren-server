const { executeQuery } = require('../../../config/db');

exports.getAllClient = () => {
  const sql = `SELECT
    application.id AS application_id,
    application.name AS application_name,
    application.package,
    client.id AS client_id,
    client.code AS client_code,
    client.name AS client_name,
    client.email,
    client.phone,
    client.website,
    client.logo,
    client.address,
    application.key,
    application.status,
    application.type,
    application.created_at AS application_created_at,
    application.updated_at AS application_updated_at
FROM
    application
JOIN
    client ON application.client = client.code;
`;
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all clients:", error);
      throw { message: "Failed to fetch all clients", error };
    });
};

exports.getClientByPackage = (clientApp) => {
  const sql = `SELECT
    application.id AS application_id,
    application.name AS application_name,
    application.package,
    client.id AS client_id,
    client.code AS client_code,
    client.name AS client_name,
    client.email,
    client.phone,
    client.website,
    client.logo,
    client.address,
    application.key,
    application.status,
    application.type,
    application.created_at AS application_created_at,
    application.updated_at AS application_updated_at
FROM
    application
JOIN
    client ON application.client = client.code  WHERE client.code = ?;
`;
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
  const sql = 'UPDATE client SET ? WHERE code = ?';
  return executeQuery(sql, [updatedClientData, clientId])
    .then(() => ({ message: "Client updated successfully", id: clientId, ...updatedClientData }))
    .catch(error => {
      console.error("Error updating client:", error);
      throw { message: "Failed to update client", error };
    });
};

exports.deleteClient = (clientId) => {
  const sql = 'DELETE FROM client WHERE code = ?';
  return executeQuery(sql, [clientId])
    .then(() => ({ message: "Client deleted successfully" }))
    .catch(error => {
      console.error("Error deleting client:", error);
      throw { message: "Failed to delete client", error };
    });
};
