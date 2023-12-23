const { executeQuery } = require('../../../config/db');

exports.getAllRekening = async () => {
  try {
    const sql = `SELECT n.nama, r.*
FROM rekening as r
JOIN nasabah as n ON r.nasabah_code = n.code`;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    console.error("Error fetching all rekening:", error);
    throw { message: "Failed to fetch all rekening", error };
  }
};

exports.getRekeningByRekening = async (rekeningId) => {
  try {
    const sql = `SELECT n.nama, r.*
FROM rekening as r
JOIN nasabah as n ON r.nasabah_code = n.code  WHERE r.nomor_rekening = ?`;
    //const sql = 'SELECT * FROM rekening WHERE nomor_rekening = ?';
    const results = await executeQuery(sql, [rekeningId]);
    return results[0];
  } catch (error) {
    console.error("Error fetching rekening by ID:", error);
    throw { message: "Failed to fetch rekening by ID", error };
  }
};

exports.createRekening = async (rekeningData) => {
  try {

    // Find the next available ID
    const result = await executeQuery('SELECT IFNULL(MAX(id) + 1, 1) AS new_id FROM rekening');
    const newId = result[0].new_id;

    // Set the code using the auto-generated logic
    rekeningData.nomor_rekening = `REK${String(newId).padStart(5, '0')}`;

    // Insert the nasabah data into the database
    const sql = 'INSERT INTO rekening SET ?';
    const results = await executeQuery(sql, [rekeningData]);

    const newRekening = { id: results.insertId, ...rekeningData };
    return newRekening;
  } catch (error) {
    console.error("Error creating rekening:", error);
    throw { message: "Failed to create rekening", error };
  }
};

exports.updateRekening = async (rekeningId, updatedRekeningData) => {
  try {
    const sql = 'UPDATE rekening SET ? WHERE nasabah_code = ?';
    await executeQuery(sql, [updatedRekeningData, rekeningId]);

    return { message: "Rekening updated successfully", id: rekeningId, ...updatedRekeningData };
  } catch (error) {
    console.error("Error updating rekening:", error);
    throw { message: "Failed to update rekening", error };
  }
};

exports.deleteRekening = async (rekeningId) => {
  try {
    const sql = 'DELETE FROM rekening WHERE nomor_rekening = ?';
    await executeQuery(sql, [rekeningId]);

    return { message: "Rekening deleted successfully" };
  } catch (error) {
    console.error("Error deleting rekening:", error);
    throw { message: "Failed to delete rekening", error };
  }
};
