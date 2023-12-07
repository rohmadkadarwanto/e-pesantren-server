// modules/wali_santri/models/waliSantriModel.js
const db = require('../../../config/db');

exports.getAllWaliSantri = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM wali_santri', (error, results) => {
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
    db.query('SELECT * FROM wali_santri WHERE id = ?', [waliSantriId], (error, results) => {
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
    db.query('INSERT INTO wali_santri SET ?', [waliSantriData], (error, results) => {
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
    db.query('UPDATE wali_santri SET ? WHERE id = ?', [updatedWaliSantriData, waliSantriId], (error, results) => {
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
    db.query('DELETE FROM wali_santri WHERE id = ?', [waliSantriId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
