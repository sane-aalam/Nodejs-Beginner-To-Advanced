// Error handling system in an Express.js app

export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.stack || err.message);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Default to 500 if not a known error
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export class NotFoundError extends ApiError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

export class ConflictError extends ApiError {
  constructor(message = "Conflict") {
    super(message, 409);
  }
}
