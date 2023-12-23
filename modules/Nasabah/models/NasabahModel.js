const { executeQuery } = require('../../../config/db');

exports.getAllNasabah = () => {
  const sql = 'SELECT * FROM nasabah';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all nasabah:", error);
      throw { message: "Failed to fetch all nasabah", error };
    });
};

exports.getNasabahByCode = (nasabahCode) => {
  const sql = 'SELECT * FROM nasabah WHERE code = ?';
  return executeQuery(sql, [nasabahCode])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching nasabah by ID:", error);
      throw { message: "Failed to fetch nasabah by ID", error };
    });
};

exports.createNasabah = async (nasabahData) => {
  try {
    // Find the next available ID
    const result = await executeQuery('SELECT IFNULL(MAX(id) + 1, 1) AS new_id FROM nasabah');
    const newId = result[0].new_id;

    // Set the code using the auto-generated logic
    nasabahData.code = `NSB${String(newId).padStart(5, '0')}`;

    // Insert the nasabah data into the database
    const sql = 'INSERT INTO nasabah SET ?';
    const results = await executeQuery(sql, [nasabahData]);

    const newNasabah = { id: results.insertId, ...nasabahData };
    return newNasabah;
  } catch (error) {
    console.error("Error creating nasabah:", error);
    throw { message: "Failed to create nasabah", error };
  }
};

exports.updateNasabah = (nasabahCode, updatedNasabahData) => {
  const sql = 'UPDATE nasabah SET ? WHERE code = ?';
  return executeQuery(sql, [updatedNasabahData, nasabahCode])
    .then(() => ({ message: "Nasabah updated successfully", id: nasabahCode, ...updatedNasabahData }))
    .catch(error => {
      console.error("Error updating nasabah:", error);
      throw { message: "Failed to update nasabah", error };
    });
};

exports.deleteNasabah = (nasabahCode) => {
  const sql = 'DELETE FROM nasabah WHERE code = ?';
  return executeQuery(sql, [nasabahCode])
    .then(() => ({ message: "Nasabah deleted successfully" }))
    .catch(error => {
      console.error("Error deleting nasabah:", error);
      throw { message: "Failed to delete nasabah", error };
    });
};
