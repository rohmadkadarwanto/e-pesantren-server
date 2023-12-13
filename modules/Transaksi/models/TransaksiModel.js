// modules/Transaksi/models/{fileName}Model.js
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

exports.getAllTransaksi = () => {
  const sql = 'SELECT * FROM transaksi';
  return executeQuery(sql);
};

exports.getTransaksiById = (transaksiId) => {
  const sql = 'SELECT * FROM transaksi WHERE id = ?';
  return executeQuery(sql, [transaksiId]);
};

exports.createTransaksi = (transaksiData) => {
  const sql = 'INSERT INTO transaksi SET ?';
  return executeQuery(sql, [transaksiData])
    .then((results) => {
      const newTransaksi = { id: results.insertId, ...transaksiData };
      return newTransaksi;
    });
};

exports.updateTransaksi = (transaksiId, updatedTransaksiData) => {
  const sql = 'UPDATE transaksi SET ? WHERE id = ?';
  return executeQuery(sql, [updatedTransaksiData, transaksiId])
    .then(() => ({ id: transaksiId, ...updatedTransaksiData }));
};

exports.deleteTransaksi = (transaksiId) => {
  const sql = 'DELETE FROM transaksi WHERE id = ?';
  return executeQuery(sql, [transaksiId]);
};
