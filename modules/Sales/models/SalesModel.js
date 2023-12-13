// modules/Sales/models/{fileName}Model.js
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

exports.getAllSales = () => {
  const sql = 'SELECT * FROM sales';
  return executeQuery(sql);
};

exports.getSalesById = (salesId) => {
  const sql = 'SELECT * FROM sales WHERE id = ?';
  return executeQuery(sql, [salesId]);
};

exports.createSales = (salesData) => {
  const sql = 'INSERT INTO sales SET ?';
  return executeQuery(sql, [salesData])
    .then((results) => {
      const newSales = { id: results.insertId, ...salesData };
      return newSales;
    });
};

exports.updateSales = (salesId, updatedSalesData) => {
  const sql = 'UPDATE sales SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSalesData, salesId])
    .then(() => ({ id: salesId, ...updatedSalesData }));
};

exports.deleteSales = (salesId) => {
  const sql = 'DELETE FROM sales WHERE id = ?';
  return executeQuery(sql, [salesId]);
};
