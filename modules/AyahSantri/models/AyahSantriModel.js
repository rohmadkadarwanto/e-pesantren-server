// modules/AyahSantri/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllAyahSantri = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM ayah_santri', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getAyahSantriById = (ayahSantriId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM ayah_santri WHERE id = ?', [ayahSantriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createAyahSantri = (ayahSantriData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO ayah_santri SET ?', [ayahSantriData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newAyahSantri = { id: results.insertId, ...ayahSantriData };
        resolve(newAyahSantri);
      }
    });
  });
};

exports.updateAyahSantri = (ayahSantriId, updatedAyahSantriData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE ayah_santri SET ? WHERE id = ?', [updatedAyahSantriData, ayahSantriId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: ayahSantriId, ...updatedAyahSantriData });
      }
    });
  });
};

exports.deleteAyahSantri = (ayahSantriId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM ayah_santri WHERE id = ?', [ayahSantriId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


