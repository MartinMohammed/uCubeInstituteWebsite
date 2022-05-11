// EXPRESS ERROR HANDLING MIDDLEWARE
module.exports = (error, req, res, next) => {
  console.log(error);
  // Message by default => what you pass to the constructor of Error()
  const status = error.statusCode || 500;
  const message = error.message;
  // error.data = validation results
  const errorData = error.data;
  res.status(status || 500).json({ message: message, data: errorData });
};
