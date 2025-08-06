// Non-Primitive Data Types:
// Object: Represents complex data structures and objects.
// Array: A special type of object used to store ordered lists of values.
// Function: Represents reusable blocks of code that can be executed.

// object
let udemyCourse = {
  firstName: "Hitesh",
  lastName: "choudary",
  emailId: "hiteshchoudarysir@gmail.com",
  password: "hitesh@1234",
};

// console.log(udemyCourse);

// array
const usersList = [
  ["John", "Doe", "john.doe@example.com", "password123"],
  ["Jane", "Smith", "jane.smith@example.com", "securePass!"],
  ["Sane", "Aalam", "sane.aalam@gmail.com", "mernStackDev@2025"],
];

// function
const ValidatorSignData = (req) => {
  const { firstname, lastname, emailId, password } = req;

  if (!firstname || !lastname) {
    throw new Error("name is not valid!");
  } else if (!emailId) {
    throw new Error("emailId is not Valid");
  } else if (!password) {
    throw new Error("please enter the right password!");
  }
};

ValidatorSignData(udemyCourse);
