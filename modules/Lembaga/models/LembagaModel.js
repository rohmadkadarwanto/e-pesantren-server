// modules/Lembaga/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllLembaga = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM lembaga', (error, results) => {
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
    DB.query('SELECT * FROM lembaga WHERE id = ?', [lembagaId], (error, results) => {
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
    DB.query('INSERT INTO lembaga SET ?', [lembagaData], (error, results) => {
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
    DB.query('UPDATE lembaga SET ? WHERE id = ?', [updatedLembagaData, lembagaId], (error, results) => {
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
    DB.query('DELETE FROM lembaga WHERE id = ?', [lembagaId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


