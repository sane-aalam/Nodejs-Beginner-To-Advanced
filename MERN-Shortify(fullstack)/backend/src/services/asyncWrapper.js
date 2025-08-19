//! ✅ Benefits of asyncWrapper
// - asyncWrapper(fn) wraps any async controller or middleware.
// - Errors are automatically passed to Express’s errorHandler.
// - Helps write clean, readable, and maintainable Express apps.

// - Without Wrapper vs With asyncWrapper
// - Repeating try-catch in every route
// - Cleaner, DRY controllers
// - Cleaner syntax
// - Production-friendly
// - reuseable
// - no need to write down again again try-catch block

const asyncWrapper = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncWrapper };
