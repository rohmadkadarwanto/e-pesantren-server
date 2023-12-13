// modules/SettingKelas/models/{fileName}Model.js
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

exports.getAllSettingKelas = () => {
  const sql = 'SELECT * FROM setting_kelas';
  return executeQuery(sql);
};

exports.getSettingKelasById = (settingKelasId) => {
  const sql = 'SELECT * FROM setting_kelas WHERE id = ?';
  return executeQuery(sql, [settingKelasId]);
};

exports.createSettingKelas = (settingKelasData) => {
  const sql = 'INSERT INTO setting_kelas SET ?';
  return executeQuery(sql, [settingKelasData])
    .then((results) => {
      const newSettingKelas = { id: results.insertId, ...settingKelasData };
      return newSettingKelas;
    });
};

exports.updateSettingKelas = (settingKelasId, updatedSettingKelasData) => {
  const sql = 'UPDATE setting_kelas SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSettingKelasData, settingKelasId])
    .then(() => ({ id: settingKelasId, ...updatedSettingKelasData }));
};

exports.deleteSettingKelas = (settingKelasId) => {
  const sql = 'DELETE FROM setting_kelas WHERE id = ?';
  return executeQuery(sql, [settingKelasId]);
};
