// modules/transaksi_detail/models/transaksiDetailModel.js
const db = require('../../../config/db');

exports.getAllTransaksiDetails = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM transaksi_detail', (error, results) => {
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
    db.query('SELECT * FROM transaksi_detail WHERE id = ?', [transaksiDetailId], (error, results) => {
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
    db.query('INSERT INTO transaksi_detail SET ?', [transaksiDetailData], (error, results) => {
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
    db.query(
      'UPDATE transaksi_detail SET ? WHERE id = ?',
      [updatedTransaksiDetailData, transaksiDetailId],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id: transaksiDetailId, ...updatedTransaksiDetailData });
        }
      }
    );
  });
};

exports.deleteTransaksiDetail = (transaksiDetailId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM transaksi_detail WHERE id = ?', [transaksiDetailId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
