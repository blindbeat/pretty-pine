const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json(err.errors);
  }

  return res.sendStatus(500);
};

export default errorHandler;
