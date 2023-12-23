const { executeQuery } = require('../../../config/db');

exports.getAllTransaksi = async () => {
  const sql = `
    SELECT
      t.id AS transaksi_id,
      t.code AS code,
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

exports.getTransaksiByCode = async (TransaksiCode) => {
  const sql = `
    SELECT
      t.id AS transaksi_id,
      t.code,
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
    WHERE t.code = ?
  `;

  return executeQuery(sql, [TransaksiCode]);
};

exports.createTransaksi = async (data) => {
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
      throw error;
    });
};

exports.updateTransaksi = async (TransaksiCode, data) => {
  const transaksiSql = 'UPDATE transaksi SET user = ?, keterangan = ?, status = ? WHERE code = ?';
  const transaksiDetailSql = 'UPDATE transaksi_detail SET account = ?, sub_account = ?, amount = ?, type = ? WHERE transaksi = ?';

  const transaksiData = [
    data.user,
    data.keterangan,
    data.status,
    TransaksiCode
  ];

  try {
    const transaksiDetailData = [
      data.account,
      data.sub_account,
      data.amount,
      data.type,
      TransaksiCode
    ];

    const transaksiResults = await executeQuery(transaksiSql, transaksiData);

    if (transaksiResults.affectedRows > 0) {
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

exports.deleteTransaksi = async (TransaksiCode) => {
  const transaksiSql = 'DELETE FROM transaksi WHERE code = ?';
  const transaksiDetailSql = 'DELETE FROM transaksi_detail WHERE transaksi = ?';

  try {
    const transaksiResults = await executeQuery(transaksiSql, [TransaksiCode]);

    if (transaksiResults.affectedRows > 0) {
      await executeQuery(transaksiDetailSql, [TransaksiCode]);

      return { message: 'Transaction and related details deleted successfully' };
    } else {
      throw new Error('Transaction not found');
    }
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};

exports.getNeraca = async () => {
  try {
    const sql = `
    SELECT
      'Aset' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS debit,
      SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS kredit
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Aset'
    GROUP BY ca.name, cs.name

    UNION

    SELECT
      'Ekuitas' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS debit,
      SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS kredit
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Aset'
    GROUP BY ca.name, cs.name;
      `;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};

exports.getLabaRugi = async () => {
  try {
    const sql = `
    SELECT
      'Pendapatan' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS pendapatan,
      0 AS beban
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Pendapatan'
    GROUP BY ca.name, cs.name

    UNION

    SELECT
      'Beban' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      0 AS pendapatan,
      SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS beban
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Beban'
    GROUP BY ca.name, cs.name;
      `;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};

exports.getPerubahanModal = async () => {
  try {
    const sql = `
    SELECT
      'Ekuitas' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS penambahan_modal,
      SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS pengurangan_modal
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Ekuitas'
    GROUP BY ca.name, cs.name;
      `;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};

exports.getArusKas = async () => {
  try {
    const sql = `
    SELECT
      'Operasi' AS jenis,
      SUM(CASE WHEN td.type = 'Debit' AND ca.type = 'Aset' THEN td.amount
               WHEN td.type = 'Credit' AND ca.type = 'Pendapatan' THEN td.amount * -1
               ELSE 0 END) AS arus_kas_operasi
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    GROUP BY jenis

    UNION

    SELECT
      'Investasi' AS jenis,
      SUM(CASE WHEN td.type = 'Debit' AND ca.type = 'Aset' THEN td.amount * -1
               WHEN td.type = 'Credit' AND ca.type = 'Aset' THEN td.amount
               ELSE 0 END) AS arus_kas_investasi
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    GROUP BY jenis

    UNION

    SELECT
      'Pembiayaan' AS jenis,
      SUM(CASE WHEN td.type = 'Debit' AND ca.type = 'Ekuitas' THEN td.amount * -1
               WHEN td.type = 'Credit' AND ca.type = 'Ekuitas' THEN td.amount
               ELSE 0 END) AS arus_kas_pembiayaan
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    GROUP BY jenis;
      `;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};



exports.getTransaksiByPeriode = async (startDate, endDate) => {
  try {
    const sql = `
      SELECT
        t.id AS transaksi_id,
        t.code,
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
      WHERE td.created_at BETWEEN '${startDate}' AND '${endDate}';
    `;
      const results = await executeQuery(sql);
      return results;
    } catch (error) {
      throw error;
    }
};


exports.getNeracaByPeriode = async (startDate, endDate) => {
  try {
    const sql = `
      -- Laporan Neraca (Balance Sheet)
      -- A. Aktiva
      SELECT
        'Aset' AS jenis,
        ca.name AS account_name,
        cs.name AS subaccount_name,
        SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS debit,
        SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS kredit
      FROM transaksi_detail td
      JOIN coa_account ca ON td.account = ca.code
      JOIN coa_subaccount cs ON td.sub_account = cs.code
      WHERE ca.type = 'Aset'
        AND td.created_at BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY ca.name, cs.name

      -- B. Kewajiban
      UNION

      SELECT
        'Kewajiban' AS jenis,
        ca.name AS account_name,
        cs.name AS subaccount_name,
        0 AS debit,
        SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS kredit
      FROM transaksi_detail td
      JOIN coa_account ca ON td.account = ca.code
      JOIN coa_subaccount cs ON td.sub_account = cs.code
      WHERE ca.type = 'Kewajiban'
        AND td.created_at BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY ca.name, cs.name

      -- C. Ekuitas
      UNION

      SELECT
        'Ekuitas' AS jenis,
        ca.name AS account_name,
        cs.name AS subaccount_name,
        SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS debit,
        SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS kredit
      FROM transaksi_detail td
      JOIN coa_account ca ON td.account = ca.code
      JOIN coa_subaccount cs ON td.sub_account = cs.code
      WHERE ca.type = 'Ekuitas'
        AND td.created_at BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY ca.name, cs.name;
    `;

    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};

exports.getLabaRugiByPeriode = async (startDate, endDate) => {
  try {
    const sql = `
    -- Laporan Laba Rugi (Income Statement)
    SELECT
      'Pendapatan' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS pendapatan,
      0 AS beban
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Pendapatan'
      AND td.created_at BETWEEN '${startDate}' AND '${endDate}'
    GROUP BY ca.name, cs.name

    UNION

    SELECT
      'Beban' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      0 AS pendapatan,
      SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS beban
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Beban'
      AND td.created_at BETWEEN '${startDate}' AND '${endDate}'
    GROUP BY ca.name, cs.name;
      `;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};

exports.getPerubahanModalByPeriode = async (startDate, endDate) => {
  try {
    const sql = `
    -- Laporan Perubahan Modal (Statement of Changes in Equity)
    SELECT
      'Ekuitas' AS jenis,
      ca.name AS account_name,
      cs.name AS subaccount_name,
      SUM(CASE WHEN td.type = 'Debit' THEN td.amount ELSE 0 END) AS penambahan_modal,
      SUM(CASE WHEN td.type = 'Credit' THEN td.amount ELSE 0 END) AS pengurangan_modal
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    JOIN coa_subaccount cs ON td.sub_account = cs.code
    WHERE ca.type = 'Ekuitas'
      AND td.created_at BETWEEN '${startDate}' AND '${endDate}'
    GROUP BY ca.name, cs.name;
      `;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};

exports.getArusKasByPeriode = async (startDate, endDate) => {
  try {
    const sql = `
    -- Laporan Arus Kas (Cash Flow Statement)
    (SELECT
      'Operasi' AS jenis,
      SUM(CASE WHEN td.type = 'Debit' AND ca.type = 'Aset' THEN td.amount
               WHEN td.type = 'Credit' AND ca.type = 'Pendapatan' THEN td.amount * -1
               ELSE 0 END) AS arus_kas_operasi
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    WHERE td.created_at BETWEEN '${startDate}' AND '${endDate}')

    UNION

    (SELECT
      'Investasi' AS jenis,
      SUM(CASE WHEN td.type = 'Debit' AND ca.type = 'Aset' THEN td.amount * -1
               WHEN td.type = 'Credit' AND ca.type = 'Aset' THEN td.amount
               ELSE 0 END) AS arus_kas_investasi
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    WHERE td.created_at BETWEEN '${startDate}' AND '${endDate}')

    UNION

    (SELECT
      'Pembiayaan' AS jenis,
      SUM(CASE WHEN td.type = 'Debit' AND ca.type = 'Ekuitas' THEN td.amount * -1
               WHEN td.type = 'Credit' AND ca.type = 'Ekuitas' THEN td.amount
               ELSE 0 END) AS arus_kas_pembiayaan
    FROM transaksi_detail td
    JOIN coa_account ca ON td.account = ca.code
    WHERE td.created_at BETWEEN '${startDate}' AND '${endDate}');
      `;
    const results = await executeQuery(sql);
    return results;
  } catch (error) {
    throw error;
  }
};
