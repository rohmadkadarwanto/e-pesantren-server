const { executeQuery } = require('../../../config/db');

exports.getAllAsatid = () => {
  const sql = 'SELECT * FROM asatid';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all asatid:", error);
      throw { message: "Failed to fetch all asatid", error };
    });
};

exports.getAsatidByNip = (asatidNip) => {
  const sql = 'SELECT * FROM asatid WHERE nip = ?';
  return executeQuery(sql, [asatidNip])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching asatid by ID:", error);
      throw { message: "Failed to fetch asatid by ID", error };
    });
};

exports.createAsatid = (asatidData) => {
  const sql = 'INSERT INTO asatid SET ?';
  return executeQuery(sql, [asatidData])
    .then(results => {
      const newAsatid = { id: results.insertId, ...asatidData };
      return newAsatid;
    })
    .catch(error => {
      console.error("Error creating asatid:", error);
      throw { message: "Failed to create asatid", error };
    });
};

exports.updateAsatid = (asatidNip, updatedAsatidData) => {
  const sql = 'UPDATE asatid SET ? WHERE nip = ?';
  return executeQuery(sql, [updatedAsatidData, asatidNip])
    .then(() => ({ message: "Asatid updated successfully", nip: asatidNip, ...updatedAsatidData }))
    .catch(error => {
      console.error("Error updating asatid:", error);
      throw { message: "Failed to update asatid", error };
    });
};

exports.deleteAsatid = (asatidNip) => {
  const sql = 'DELETE FROM asatid WHERE nip = ?';
  return executeQuery(sql, [asatidNip])
    .then(() => ({ message: "Asatid deleted successfully" }))
    .catch(error => {
      console.error("Error deleting asatid:", error);
      throw { message: "Failed to delete asatid", error };
    });
};
