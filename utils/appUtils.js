// utils/appUtils.js
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config/db');
const { apiUtils } = require('./apiKey');
const pool = mysql.createPool(dbConfig);
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

exports.getAppFromHeaderKey = async (headerKey) => {
  try {
    const results = await executeQuery('SELECT package FROM application WHERE `key` = ?', [headerKey]);
    if (results.length > 0) {
      return results[0].package;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

exports.getCodeLembagaByKelasId = async (kelasId) => {
  try {
    const sql = `SELECT l.code AS code_lembaga
    FROM setting_kelas sk
    JOIN kelas k ON sk.kelas = k.id
    JOIN lembaga l ON sk.lembaga = l.code WHERE k.id = ?`;
    const results = await executeQuery(sql, [kelasId]);
    if (results.length > 0) {
      return results[0].code_lembaga;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
