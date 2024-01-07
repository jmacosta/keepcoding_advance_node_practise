export default (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.status || 500;
  const errorResponse = {
    error: {
      message: err.message || 'Internal Server Error',
      code: statusCode
    }
  };

  res.status(statusCode).json(errorResponse);
};
