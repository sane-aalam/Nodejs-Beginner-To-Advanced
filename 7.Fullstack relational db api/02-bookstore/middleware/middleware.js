// Middleware 1 - Adds request time
const attachRequestTimestamp = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`[Request Timestamp Middleware] Time set: ${req.requestTime}`);
  next();
};

// Middleware 2 - Adds user info
const middleware2 = (req, res, next) => {
  req.userInfo = {
    id: 101,
    name: "John Doe",
    requestTime: req.requestTime,
  };
  console.log(
    `[Middleware 2] User info added: ${JSON.stringify(req.userInfo)}`
  );
  next();
};

// Middleware 3 - Final log
const middleware3 = (req, res, next) => {
  console.log(
    `[Middleware 3] Final log → User: ${req.userInfo.name}, Request Time: ${req.userInfo.requestTime}`
  );
  next();
};

export default { attachRequestTimestamp, middleware2, middleware3 };
