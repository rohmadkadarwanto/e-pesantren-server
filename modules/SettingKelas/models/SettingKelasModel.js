const { executeQuery } = require('../../../config/db');

exports.getAllSettingKelas = () => {
  const sql = 'SELECT * FROM setting_kelas';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all setting kelas:", error);
      throw { message: "Failed to fetch all setting kelas", error };
    });
};

exports.getSettingKelasById = (settingKelasId) => {
  const sql = 'SELECT * FROM setting_kelas WHERE id = ?';
  return executeQuery(sql, [settingKelasId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching setting kelas by ID:", error);
      throw { message: "Failed to fetch setting kelas by ID", error };
    });
};

exports.createSettingKelas = (settingKelasData) => {
  const sql = 'INSERT INTO setting_kelas SET ?';
  return executeQuery(sql, [settingKelasData])
    .then(results => {
      const newSettingKelas = { id: results.insertId, ...settingKelasData };
      return newSettingKelas;
    })
    .catch(error => {
      console.error("Error creating setting kelas:", error);
      throw { message: "Failed to create setting kelas", error };
    });
};

exports.updateSettingKelas = (settingKelasId, updatedSettingKelasData) => {
  const sql = 'UPDATE setting_kelas SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSettingKelasData, settingKelasId])
    .then(() => ({ message: "Setting kelas updated successfully", id: settingKelasId, ...updatedSettingKelasData }))
    .catch(error => {
      console.error("Error updating setting kelas:", error);
      throw { message: "Failed to update setting kelas", error };
    });
};

exports.deleteSettingKelas = (settingKelasId) => {
  const sql = 'DELETE FROM setting_kelas WHERE id = ?';
  return executeQuery(sql, [settingKelasId])
    .then(() => ({ message: "Setting kelas deleted successfully" }))
    .catch(error => {
      console.error("Error deleting setting kelas:", error);
      throw { message: "Failed to delete setting kelas", error };
    });
};
