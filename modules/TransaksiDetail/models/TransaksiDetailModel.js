// modules/TransaksiDetail/models/{fileName}Model.js
const { pool } = require('../../../config/db');

const executeQuery = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};

exports.getAllTransaksiDetail = () => {
  const sql = 'SELECT * FROM transaksi_detail';
  return executeQuery(sql);
};

exports.getTransaksiDetailById = (transaksiDetailId) => {
  const sql = 'SELECT * FROM transaksi_detail WHERE id = ?';
  return executeQuery(sql, [transaksiDetailId]);
};

exports.createTransaksiDetail = (transaksiDetailData) => {
  const sql = 'INSERT INTO transaksi_detail SET ?';
  return executeQuery(sql, [transaksiDetailData])
    .then((results) => {
      const newTransaksiDetail = { id: results.insertId, ...transaksiDetailData };
      return newTransaksiDetail;
    });
};

exports.updateTransaksiDetail = (transaksiDetailId, updatedTransaksiDetailData) => {
  const sql = 'UPDATE transaksi_detail SET ? WHERE id = ?';
  return executeQuery(sql, [updatedTransaksiDetailData, transaksiDetailId])
    .then(() => ({ id: transaksiDetailId, ...updatedTransaksiDetailData }));
};

exports.deleteTransaksiDetail = (transaksiDetailId) => {
  const sql = 'DELETE FROM transaksi_detail WHERE id = ?';
  return executeQuery(sql, [transaksiDetailId]);
};
