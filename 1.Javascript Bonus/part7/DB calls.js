// Mock DB function 

function getUsersFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Alice", "Bob", "Charlie"]);
    }, 1000); 
  });
}

// IIFE to handle DB call immediately
(async function () {
  console.log("Fetching users from DB...");

  try {
    const users = await getUsersFromDB();
    console.log("Users fetched:", users);
  } catch (error) {
    console.error("DB Error:", error);
  }
})();
