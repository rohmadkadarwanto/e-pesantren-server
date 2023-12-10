// modules/WaliSantri/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllWaliSantri = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM wali_santri', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getWaliSantriById = (waliSantriId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM wali_santri WHERE id = ?', [waliSantriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createWaliSantri = (waliSantriData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO wali_santri SET ?', [waliSantriData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newWaliSantri = { id: results.insertId, ...waliSantriData };
        resolve(newWaliSantri);
      }
    });
  });
};

exports.updateWaliSantri = (waliSantriId, updatedWaliSantriData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE wali_santri SET ? WHERE id = ?', [updatedWaliSantriData, waliSantriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: waliSantriId, ...updatedWaliSantriData });
      }
    });
  });
};

exports.deleteWaliSantri = (waliSantriId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM wali_santri WHERE id = ?', [waliSantriId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


