// modules/CoaAccount/models/{fileName}Model.js
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

exports.getAllCoaAccount = () => {
  const sql = 'SELECT * FROM coa_account';
  return executeQuery(sql);
};

exports.getCoaAccountById = (coaAccountId) => {
  const sql = 'SELECT * FROM coa_account WHERE id = ?';
  return executeQuery(sql, [coaAccountId]);
};

exports.createCoaAccount = (coaAccountData) => {
  const sql = 'INSERT INTO coa_account SET ?';
  return executeQuery(sql, [coaAccountData])
    .then((results) => {
      const newCoaAccount = { id: results.insertId, ...coaAccountData };
      return newCoaAccount;
    });
};

exports.updateCoaAccount = (coaAccountId, updatedCoaAccountData) => {
  const sql = 'UPDATE coa_account SET ? WHERE id = ?';
  return executeQuery(sql, [updatedCoaAccountData, coaAccountId])
    .then(() => ({ id: coaAccountId, ...updatedCoaAccountData }));
};

exports.deleteCoaAccount = (coaAccountId) => {
  const sql = 'DELETE FROM coa_account WHERE id = ?';
  return executeQuery(sql, [coaAccountId]);
};
