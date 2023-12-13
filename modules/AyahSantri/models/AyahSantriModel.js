// modules/AyahSantri/models/{fileName}Model.js
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

exports.getAllAyahSantri = () => {
  const sql = 'SELECT * FROM ayah_santri';
  return executeQuery(sql);
};

exports.getAyahSantriById = (ayahSantriId) => {
  const sql = 'SELECT * FROM ayah_santri WHERE id = ?';
  return executeQuery(sql, [ayahSantriId]);
};

exports.createAyahSantri = (ayahSantriData) => {
  const sql = 'INSERT INTO ayah_santri SET ?';
  return executeQuery(sql, [ayahSantriData])
    .then((results) => {
      const newAyahSantri = { id: results.insertId, ...ayahSantriData };
      return newAyahSantri;
    });
};

exports.updateAyahSantri = (ayahSantriId, updatedAyahSantriData) => {
  const sql = 'UPDATE ayah_santri SET ? WHERE id = ?';
  return executeQuery(sql, [updatedAyahSantriData, ayahSantriId])
    .then(() => ({ id: ayahSantriId, ...updatedAyahSantriData }));
};

exports.deleteAyahSantri = (ayahSantriId) => {
  const sql = 'DELETE FROM ayah_santri WHERE id = ?';
  return executeQuery(sql, [ayahSantriId]);
};
