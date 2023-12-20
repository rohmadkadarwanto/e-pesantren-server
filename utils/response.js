module.exports = {
  success: (res, data, statusCode = 200) => {
    res.status(statusCode).json({
      success: true,
      count: Array.isArray(data) ? data.length : Object.keys(data).length,
      data,
    });
  },
  error: (res, message, statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      error: {
        message,
      },
    });
  },
};
