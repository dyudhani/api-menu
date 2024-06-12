const response = (res, status, success, message, data) => {
  let result = {
    status,
    success,
    message,
    data,
  };

  return res.status(status).json(result);
};

module.exports = { response };
