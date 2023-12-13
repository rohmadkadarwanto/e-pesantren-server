// modules/IbuSantri/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllIbuSantri = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM ibu_santri', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getIbuSantriById = (ibuSantriId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM ibu_santri WHERE id = ?', [ibuSantriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createIbuSantri = (ibuSantriData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO ibu_santri SET ?', [ibuSantriData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newIbuSantri = { id: results.insertId, ...ibuSantriData };
        resolve(newIbuSantri);
      }
    });
  });
};

exports.updateIbuSantri = (ibuSantriId, updatedIbuSantriData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE ibu_santri SET ? WHERE id = ?', [updatedIbuSantriData, ibuSantriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: ibuSantriId, ...updatedIbuSantriData });
      }
    });
  });
};

exports.deleteIbuSantri = (ibuSantriId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM ibu_santri WHERE id = ?', [ibuSantriId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

