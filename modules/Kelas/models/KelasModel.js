const { executeQuery } = require('../../../config/db');

exports.getAllKelas = () => {
  const sql = `SELECT sk.*, k.name AS kelas_name, l.name AS lembaga_name
  FROM setting_kelas sk
  JOIN kelas k ON sk.kelas = k.id
  JOIN lembaga l ON sk.lembaga = l.code`;
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all kelas:", error);
      throw { message: "Failed to fetch all kelas", error };
    });
};

exports.getKelasById = (kelasId) => {
  const sql = `SELECT sk.*, k.name AS kelas_name, l.name AS lembaga_name
  FROM setting_kelas sk
  JOIN kelas k ON sk.kelas = k.id
  JOIN lembaga l ON sk.lembaga = l.code WHERE k.id = ?`;
  return executeQuery(sql, [kelasId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching kelas by ID:", error);
      throw { message: "Failed to fetch kelas by ID", error };
    });
};

exports.createKelas = (kelasData) => {
  const sql = 'INSERT INTO kelas SET ?';
  return executeQuery(sql, [kelasData])
    .then(results => {
      const newKelas = { id: results.insertId, ...kelasData };
      return newKelas;
    })
    .catch(error => {
      console.error("Error creating kelas:", error);
      throw { message: "Failed to create kelas", error };
    });
};

exports.updateKelas = (kelasId, updatedKelasData) => {
  const sql = 'UPDATE kelas SET ? WHERE id = ?';
  return executeQuery(sql, [updatedKelasData, kelasId])
    .then(() => ({ message: "Kelas updated successfully", id: kelasId, ...updatedKelasData }))
    .catch(error => {
      console.error("Error updating kelas:", error);
      throw { message: "Failed to update kelas", error };
    });
};

exports.deleteKelas = (kelasId) => {
  const sql = 'DELETE FROM kelas WHERE id = ?';
  return executeQuery(sql, [kelasId])
    .then(() => ({ message: "Kelas deleted successfully" }))
    .catch(error => {
      console.error("Error deleting kelas:", error);
      throw { message: "Failed to delete kelas", error };
    });
};
