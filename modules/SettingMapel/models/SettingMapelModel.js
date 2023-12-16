const { executeQuery } = require('../../../config/db');

exports.getAllSettingMapel = () => {
  const sql = 'SELECT * FROM setting_mapel';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all setting mapel:", error);
      throw { message: "Failed to fetch all setting mapel", error };
    });
};

exports.getSettingMapelById = (settingMapelId) => {
  const sql = 'SELECT * FROM setting_mapel WHERE id = ?';
  return executeQuery(sql, [settingMapelId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching setting mapel by ID:", error);
      throw { message: "Failed to fetch setting mapel by ID", error };
    });
};

exports.createSettingMapel = (settingMapelData) => {
  const sql = 'INSERT INTO setting_mapel SET ?';
  return executeQuery(sql, [settingMapelData])
    .then(results => {
      const newSettingMapel = { id: results.insertId, ...settingMapelData };
      return newSettingMapel;
    })
    .catch(error => {
      console.error("Error creating setting mapel:", error);
      throw { message: "Failed to create setting mapel", error };
    });
};

exports.updateSettingMapel = (settingMapelId, updatedSettingMapelData) => {
  const sql = 'UPDATE setting_mapel SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSettingMapelData, settingMapelId])
    .then(() => ({ message: "Setting mapel updated successfully", id: settingMapelId, ...updatedSettingMapelData }))
    .catch(error => {
      console.error("Error updating setting mapel:", error);
      throw { message: "Failed to update setting mapel", error };
    });
};

exports.deleteSettingMapel = (settingMapelId) => {
  const sql = 'DELETE FROM setting_mapel WHERE id = ?';
  return executeQuery(sql, [settingMapelId])
    .then(() => ({ message: "Setting mapel deleted successfully" }))
    .catch(error => {
      console.error("Error deleting setting mapel:", error);
      throw { message: "Failed to delete setting mapel", error };
    });
};
