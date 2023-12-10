// modules/Client/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllClient = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM client', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getClientById = (clientId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM client WHERE id = ?', [clientId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createClient = (clientData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO client SET ?', [clientData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newClient = { id: results.insertId, ...clientData };
        resolve(newClient);
      }
    });
  });
};

exports.updateClient = (clientId, updatedClientData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE client SET ? WHERE id = ?', [updatedClientData, clientId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: clientId, ...updatedClientData });
      }
    });
  });
};

exports.deleteClient = (clientId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM client WHERE id = ?', [clientId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


