// modules/Transaksi/models/{fileName}Model.js
const { executeQuery } = require('../../../config/db');

exports.getAllTransaksi = () => {
  // Mengambil data transaksi_detail beserta informasi coa_account dan coa_subaccount terkait
  const sql = `
    SELECT
      t.id AS transaksi_id,
      td.id AS transaksi_detail_id,
      td.transaksi,
      td.account,
      td.sub_account,
      td.amount,
      td.type,
      td.created_at AS transaksi_detail_created_at,
      ca.id AS coa_account_id,
      ca.code AS coa_account_code,
      ca.name AS coa_account_name,
      ca.type AS coa_account_type,
      ca.normal_balance AS coa_account_normal_balance,
      cs.id AS coa_subaccount_id,
      cs.account_code AS coa_subaccount_account_code,
      cs.code AS coa_subaccount_code,
      cs.name AS coa_subaccount_name
    FROM transaksi_detail td
    LEFT JOIN transaksi t ON td.transaksi = t.code
    LEFT JOIN coa_account ca ON td.account = ca.code
    LEFT JOIN coa_subaccount cs ON td.sub_account = cs.code
  `;

  return executeQuery(sql);
};

exports.getTransaksiById = (transaksiId) => {
  // Mengambil data transaksi_detail beserta informasi coa_account dan coa_subaccount terkait
  const sql = `
    SELECT
      t.id AS transaksi_id,
      td.id AS transaksi_detail_id,
      td.transaksi,
      td.account,
      td.sub_account,
      td.amount,
      td.type,
      td.created_at AS transaksi_detail_created_at,
      ca.id AS coa_account_id,
      ca.code AS coa_account_code,
      ca.name AS coa_account_name,
      ca.type AS coa_account_type,
      ca.normal_balance AS coa_account_normal_balance,
      cs.id AS coa_subaccount_id,
      cs.account_code AS coa_subaccount_account_code,
      cs.code AS coa_subaccount_code,
      cs.name AS coa_subaccount_name
    FROM transaksi_detail td
    LEFT JOIN transaksi t ON td.transaksi = t.code
    LEFT JOIN coa_account ca ON td.account = ca.code
    LEFT JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE t.id = ?
  `;

  return executeQuery(sql, [transaksiId]);
};

exports.createTransaksi = (data) => {
  const transaksiSql = 'INSERT INTO transaksi SET ?';
  const transaksiDetailSql = 'INSERT INTO transaksi_detail SET ?';

  const transaksiData = {
    app: data.app,
    code: data.code,
    user: data.user,
    keterangan: data.keterangan,
    status: data.status
  };

  const transaksiDetailData = {
    transaksi: data.code,
    account: data.account,
    sub_account: data.sub_account,
    amount: data.amount,
    type: data.type
  };

  return executeQuery(transaksiSql, [transaksiData])
    .then((transaksiResults) => {
      const newTransaksi = { id: transaksiResults.insertId, ...transaksiData };

      return executeQuery(transaksiDetailSql, [transaksiDetailData])
        .then((detailResults) => {
          const newTransaksiDetail = { id: detailResults.insertId, ...transaksiDetailData };
          return { transaksi: newTransaksi, transaksiDetail: newTransaksiDetail };
        });
    })
    .catch((error) => {
      console.error("Error creating transaction:", error);
      throw error; // Jangan lupa untuk melemparkan error agar dapat ditangkap oleh pemanggil fungsi ini
    });
};

exports.updateTransaksi = async (TransaksiId, data) => {
  const transaksiSql = 'UPDATE transaksi SET user = ?, keterangan = ?, status = ? WHERE id = ?';
  const transaksiDetailSql = 'UPDATE transaksi_detail SET account = ?, sub_account = ?, amount = ?, type = ? WHERE transaksi = ?';

  const transaksiData = [
    data.user,
    data.keterangan,
    data.status,
    TransaksiId
  ];


  try {
    // Mendapatkan objek transaksi dengan ID tertentu
    const transaksi = await exports.getTransaksiById(TransaksiId);

    if (!transaksi) {
      throw new Error('Transaction not found');
    }

    // Menggunakan nilai 'code' dari objek transaksi
    const code = transaksi[0].transaksi;
    //console.error("Code", JSON.stringify(transaksi[0].transaksi));
    const transaksiDetailData = [
      data.account,
      data.sub_account,
      data.amount,
      data.type,
      code
    ];

    const transaksiResults = await executeQuery(transaksiSql, transaksiData);

    if (transaksiResults.affectedRows > 0) {
      // Jika transaksi diupdate, update juga detail transaksi
      await executeQuery(transaksiDetailSql, transaksiDetailData);
      return { message: 'Transaction and related details updated successfully' };
    } else {
      throw new Error('Transaction not found');
    }
  } catch (error) {
    console.error("Error updating transaction:", error);
    throw error;
  }
};

/*exports.deleteTransaksi = (transaksiId) => {
  const transaksiSql = 'DELETE FROM transaksi WHERE id = ?';
  return executeQuery(transaksiSql, [transaksiId])
    .then((results) => {
      if (results.affectedRows > 0) {
        return { message: 'Transaction deleted successfully' };
      } else {
        throw new Error('Transaction not found');
      }
    })
    .catch((error) => {
      console.error("Error deleting transaction:", error);
      throw error;
    });
};*/



exports.deleteTransaksi = async (transaksiId) => {
  const transaksiSql = 'DELETE FROM transaksi WHERE id = ?';
  const transaksiDetailSql = 'DELETE FROM transaksi_detail WHERE transaksi = ?';

  try {
    // Mendapatkan objek transaksi dengan ID tertentu
    const transaksi = await exports.getTransaksiById(transaksiId);

    if (!transaksi) {
      throw new Error('Transaction not found');
    }

    // Menggunakan nilai 'code' dari objek transaksi
    const code = transaksi[0].transaksi;

    // Menghapus transaksi dari tabel 'transaksi'
    const transaksiResults = await executeQuery(transaksiSql, [transaksiId]);

    if (transaksiResults.affectedRows > 0) {
      // Jika transaksi dihapus, hapus juga detail transaksi
      await executeQuery(transaksiDetailSql, [code]);

      return { message: 'Transaction and related details deleted successfully' };
    } else {
      throw new Error('Transaction not found');
    }
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};
