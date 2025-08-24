import express from "express";

const ErrorHander = (req, res, err, next) => {
  console.log(err.stack);
  const statusCode = err.status || 5000;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong!",
  });
};

export default ErrorHander;
