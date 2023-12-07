// modules/santri/models/santriModel.js
const db = require('../../../config/db');

exports.getAllSantri = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM santri', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getSantriById = (santriId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM santri WHERE id = ?', [santriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createSantri = (santriData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO santri SET ?', [santriData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newSantri = { id: results.insertId, ...santriData };
        resolve(newSantri);
      }
    });
  });
};

exports.updateSantri = (santriId, updatedSantriData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE santri SET ? WHERE id = ?', [updatedSantriData, santriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: santriId, ...updatedSantriData });
      }
    });
  });
};

exports.deleteSantri = (santriId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM santri WHERE id = ?', [santriId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
