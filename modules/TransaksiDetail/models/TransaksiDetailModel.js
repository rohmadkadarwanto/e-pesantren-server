// modules/TransaksiDetail/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllTransaksiDetail = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM transaksi_detail', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getTransaksiDetailById = (transaksiDetailId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM transaksi_detail WHERE id = ?', [transaksiDetailId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createTransaksiDetail = (transaksiDetailData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO transaksi_detail SET ?', [transaksiDetailData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newTransaksiDetail = { id: results.insertId, ...transaksiDetailData };
        resolve(newTransaksiDetail);
      }
    });
  });
};

exports.updateTransaksiDetail = (transaksiDetailId, updatedTransaksiDetailData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE transaksi_detail SET ? WHERE id = ?', [updatedTransaksiDetailData, transaksiDetailId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: transaksiDetailId, ...updatedTransaksiDetailData });
      }
    });
  });
};

exports.deleteTransaksiDetail = (transaksiDetailId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM transaksi_detail WHERE id = ?', [transaksiDetailId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


