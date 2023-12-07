// modules/lembaga/models/lembagaModel.js
const db = require('../../../config/db');

exports.getAllLembaga = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM lembaga', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getLembagaById = (lembagaId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM lembaga WHERE id = ?', [lembagaId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createLembaga = (lembagaData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO lembaga SET ?', [lembagaData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newLembaga = { id: results.insertId, ...lembagaData };
        resolve(newLembaga);
      }
    });
  });
};

exports.updateLembaga = (lembagaId, updatedLembagaData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE lembaga SET ? WHERE id = ?', [updatedLembagaData, lembagaId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: lembagaId, ...updatedLembagaData });
      }
    });
  });
};

exports.deleteLembaga = (lembagaId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM lembaga WHERE id = ?', [lembagaId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
