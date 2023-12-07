// modules/kelas/models/kelasModel.js
const db = require('../../../config/db');

exports.getAllKelas = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM kelas', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getKelasById = (kelasId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM kelas WHERE id = ?', [kelasId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createKelas = (kelasData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO kelas SET ?', [kelasData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newKelas = { id: results.insertId, ...kelasData };
        resolve(newKelas);
      }
    });
  });
};

exports.updateKelas = (kelasId, updatedKelasData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE kelas SET ? WHERE id = ?', [updatedKelasData, kelasId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: kelasId, ...updatedKelasData });
      }
    });
  });
};

exports.deleteKelas = (kelasId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM kelas WHERE id = ?', [kelasId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
