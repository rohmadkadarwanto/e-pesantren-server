const { executeQuery } = require('../../../config/db');

exports.getAllLembaga = () => {
  const sql = 'SELECT * FROM lembaga';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all lembaga:", error);
      throw { message: "Failed to fetch all lembaga", error };
    });
};

exports.getLembagaByCode = (lembagaCode) => {
  const sql = 'SELECT * FROM lembaga WHERE code = ?';
  return executeQuery(sql, [lembagaId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching lembaga by Code:", error);
      throw { message: "Failed to fetch lembaga by Code", error };
    });
};

exports.createLembaga = (lembagaData) => {
  const sql = 'INSERT INTO lembaga SET ?';
  return executeQuery(sql, [lembagaData])
    .then(results => {
      const newLembaga = { id: results.insertId, ...lembagaData };
      return newLembaga;
    })
    .catch(error => {
      console.error("Error creating lembaga:", error);
      throw { message: "Failed to create lembaga", error };
    });
};

exports.updateLembaga = (lembagaCode, updatedLembagaData) => {
  const sql = 'UPDATE lembaga SET ? WHERE code = ?';
  return executeQuery(sql, [updatedLembagaData, lembagaCode])
    .then(() => ({ message: "Lembaga updated successfully", code: lembagaCode, ...updatedLembagaData }))
    .catch(error => {
      console.error("Error updating lembaga:", error);
      throw { message: "Failed to update lembaga", error };
    });
};

exports.deleteLembaga = (lembagaCode) => {
  const sql = 'DELETE FROM lembaga WHERE code = ?';
  return executeQuery(sql, [lembagaId])
    .then(() => ({ message: "Lembaga deleted successfully" }))
    .catch(error => {
      console.error("Error deleting lembaga:", error);
      throw { message: "Failed to delete lembaga", error };
    });
};
