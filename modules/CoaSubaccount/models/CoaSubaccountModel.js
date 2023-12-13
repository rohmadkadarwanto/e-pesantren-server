// modules/CoaSubaccount/models/{fileName}Model.js
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

exports.getAllCoaSubaccount = () => {
  const sql = 'SELECT * FROM coa_subaccount';
  return executeQuery(sql);
};

exports.getCoaSubaccountById = (coaSubaccountId) => {
  const sql = 'SELECT * FROM coa_subaccount WHERE id = ?';
  return executeQuery(sql, [coaSubaccountId]);
};

exports.createCoaSubaccount = (coaSubaccountData) => {
  const sql = 'INSERT INTO coa_subaccount SET ?';
  return executeQuery(sql, [coaSubaccountData])
    .then((results) => {
      const newCoaSubaccount = { id: results.insertId, ...coaSubaccountData };
      return newCoaSubaccount;
    });
};

exports.updateCoaSubaccount = (coaSubaccountId, updatedCoaSubaccountData) => {
  const sql = 'UPDATE coa_subaccount SET ? WHERE id = ?';
  return executeQuery(sql, [updatedCoaSubaccountData, coaSubaccountId])
    .then(() => ({ id: coaSubaccountId, ...updatedCoaSubaccountData }));
};

exports.deleteCoaSubaccount = (coaSubaccountId) => {
  const sql = 'DELETE FROM coa_subaccount WHERE id = ?';
  return executeQuery(sql, [coaSubaccountId]);
};
