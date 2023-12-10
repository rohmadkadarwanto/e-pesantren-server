// modules/MataPelajaran/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllMataPelajaran = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM mata_pelajaran', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getMataPelajaranById = (mataPelajaranId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM mata_pelajaran WHERE id = ?', [mataPelajaranId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createMataPelajaran = (mataPelajaranData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO mata_pelajaran SET ?', [mataPelajaranData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newMataPelajaran = { id: results.insertId, ...mataPelajaranData };
        resolve(newMataPelajaran);
      }
    });
  });
};

exports.updateMataPelajaran = (mataPelajaranId, updatedMataPelajaranData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE mata_pelajaran SET ? WHERE id = ?', [updatedMataPelajaranData, mataPelajaranId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: mataPelajaranId, ...updatedMataPelajaranData });
      }
    });
  });
};

exports.deleteMataPelajaran = (mataPelajaranId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM mata_pelajaran WHERE id = ?', [mataPelajaranId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


