const { executeQuery } = require('../../../config/db');

exports.getAllMataPelajaran = () => {
  const sql = 'SELECT * FROM mata_pelajaran';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all mata pelajaran:", error);
      throw { message: "Failed to fetch all mata pelajaran", error };
    });
};

exports.getMataPelajaranByCode = (mataPelajaranCode) => {
  const sql = 'SELECT * FROM mata_pelajaran WHERE code = ?';
  return executeQuery(sql, [mataPelajaranCode])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching mata pelajaran by Code:", error);
      throw { message: "Failed to fetch mata pelajaran by Code", error };
    });
};

exports.createMataPelajaran = (mataPelajaranData) => {
  const sql = 'INSERT INTO mata_pelajaran SET ?';
  return executeQuery(sql, [mataPelajaranData])
    .then(results => {
      const newMataPelajaran = { id: results.insertId, ...mataPelajaranData };
      return newMataPelajaran;
    })
    .catch(error => {
      console.error("Error creating mata pelajaran:", error);
      throw { message: "Failed to create mata pelajaran", error };
    });
};

exports.updateMataPelajaran = (mataPelajaranCode, updatedMataPelajaranData) => {
  const sql = 'UPDATE mata_pelajaran SET ? WHERE code = ?';
  return executeQuery(sql, [updatedMataPelajaranData, mataPelajaranCode])
    .then(() => ({ message: "Mata pelajaran updated successfully", code: mataPelajaranCode, ...updatedMataPelajaranData }))
    .catch(error => {
      console.error("Error updating mata pelajaran:", error);
      throw { message: "Failed to update mata pelajaran", error };
    });
};

exports.deleteMataPelajaran = (mataPelajaranCode) => {
  const sql = 'DELETE FROM mata_pelajaran WHERE code = ?';
  return executeQuery(sql, [mataPelajaranCode])
    .then(() => ({ message: "Mata pelajaran deleted successfully" }))
    .catch(error => {
      console.error("Error deleting mata pelajaran:", error);
      throw { message: "Failed to delete mata pelajaran", error };
    });
};
