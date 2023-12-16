const { executeQuery } = require('../../../config/db');

exports.getAllCoaAccount = () => {
  const sql = 'SELECT * FROM coa_account';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all coa accounts:", error);
      throw { message: "Failed to fetch all coa accounts", error };
    });
};

exports.getCoaAccountById = (coaAccountId) => {
  const sql = 'SELECT * FROM coa_account WHERE id = ?';
  return executeQuery(sql, [coaAccountId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching coa account by ID:", error);
      throw { message: "Failed to fetch coa account by ID", error };
    });
};

exports.createCoaAccount = (coaAccountData) => {
  const sql = 'INSERT INTO coa_account SET ?';
  return executeQuery(sql, [coaAccountData])
    .then(results => {
      const newCoaAccount = { id: results.insertId, ...coaAccountData };
      return newCoaAccount;
    })
    .catch(error => {
      console.error("Error creating coa account:", error);
      throw { message: "Failed to create coa account", error };
    });
};

exports.updateCoaAccount = (coaAccountId, updatedCoaAccountData) => {
  const sql = 'UPDATE coa_account SET ? WHERE id = ?';
  return executeQuery(sql, [updatedCoaAccountData, coaAccountId])
    .then(() => ({ message: "Coa account updated successfully", id: coaAccountId, ...updatedCoaAccountData }))
    .catch(error => {
      console.error("Error updating coa account:", error);
      throw { message: "Failed to update coa account", error };
    });
};

exports.deleteCoaAccount = (coaAccountId) => {
  const sql = 'DELETE FROM coa_account WHERE id = ?';
  return executeQuery(sql, [coaAccountId])
    .then(() => ({ message: "Coa account deleted successfully" }))
    .catch(error => {
      console.error("Error deleting coa account:", error);
      throw { message: "Failed to delete coa account", error };
    });
};
