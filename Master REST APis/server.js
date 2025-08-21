import app from "./src/index.js";
import connectDB from "./DB/index.js";

// const bluid = "backend App";
// console.log(`Mastering REST APis ${bluid}`);

const startServer = async () => {
  const port = process.env.PORT || 3000;
  // Connect database
  await connectDB();
  app.listen(port, () => {
    console.log(`Listing on the port ${port}`);
  });
};

startServer();
