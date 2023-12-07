// modules/transaksi/models/transaksiModel.js
const db = require('../../../config/db');

exports.getAllTransaksi = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM transaksi', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getTransaksiById = (transaksiId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM transaksi WHERE id = ?', [transaksiId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createTransaksi = (transaksiData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO transaksi SET ?', [transaksiData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newTransaksi = { id: results.insertId, ...transaksiData };
        resolve(newTransaksi);
      }
    });
  });
};

exports.updateTransaksi = (transaksiId, updatedTransaksiData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE transaksi SET ? WHERE id = ?', [updatedTransaksiData, transaksiId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: transaksiId, ...updatedTransaksiData });
      }
    });
  });
};

exports.deleteTransaksi = (transaksiId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM transaksi WHERE id = ?', [transaksiId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
