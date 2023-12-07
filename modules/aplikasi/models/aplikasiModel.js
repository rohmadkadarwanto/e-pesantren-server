// modules/aplikasi/models/aplikasiModel.js
const db = require('../../../config/db');

exports.getAllAplikasi = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM application', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getAplikasiById = (aplikasiId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM application WHERE id = ?', [aplikasiId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createAplikasi = (aplikasiData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO application SET ?', [aplikasiData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newAplikasi = { id: results.insertId, ...aplikasiData };
        resolve(newAplikasi);
      }
    });
  });
};

exports.updateAplikasi = (aplikasiId, updatedAplikasiData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE application SET ? WHERE id = ?', [updatedAplikasiData, aplikasiId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: aplikasiId, ...updatedAplikasiData });
      }
    });
  });
};

exports.deleteAplikasi = (aplikasiId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM application WHERE id = ?', [aplikasiId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
