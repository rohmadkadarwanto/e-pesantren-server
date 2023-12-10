// modules/Asatid/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllAsatid = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM asatid', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getAsatidById = (asatidId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM asatid WHERE id = ?', [asatidId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createAsatid = (asatidData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO asatid SET ?', [asatidData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newAsatid = { id: results.insertId, ...asatidData };
        resolve(newAsatid);
      }
    });
  });
};

exports.updateAsatid = (asatidId, updatedAsatidData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE asatid SET ? WHERE id = ?', [updatedAsatidData, asatidId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: asatidId, ...updatedAsatidData });
      }
    });
  });
};

exports.deleteAsatid = (asatidId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM asatid WHERE id = ?', [asatidId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


