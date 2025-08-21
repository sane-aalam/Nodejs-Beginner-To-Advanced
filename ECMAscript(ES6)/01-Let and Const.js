// Var,const,let Interview Preparation

// → Problems with var(keyword)
// attach with window object some case it can be issue
// Function scoped, not block scoped

var product = "Laptop";
if (true) {
  let bestProduct = "Swiggy offers - Food free";
  console.log(bestProduct);
  console.log(product);
}
console.log(product);
console.log(wiindow.product);
console.log(bestProduct);
// acess bestProduct(block scope)
// can not access out slide the block

// Hoisting issue
console.log(newProduct);
var newProduct = "HP Vitucs laptop";

// Can be redeclared
var currentUser = "Chai or code!";

console.log(currentUser);
var currentUser = {
  firstname: "suhuil",
  lastname: "khan",
  age: 21,
  skils: "BackendEngineer",
  pincode: 299101,
};

console.log(currentUser);

// → Let keyword
// Block scoped → safer, but sometimes confusing for beginners.
// Cannot be redeclared in the same scope → Good for safety, but throws error if done accidentally.
// Problems with let - Temporal Dead Zone (TDZ)

let course = "Engish Grammer ASIP2.1";
console.log(course);

// ❌ SyntaxError
// let course = "Math 4.1";
// console.log(course)

//  Block scoped
let User = "Subhash Kumar";
if (true) {
  let udpateUser = "Subhash Sharma";
  console.log(User);
}

// ReferenceError: udpateUser is not defined
console.log(udpateUser);

// const (keyword);
// rule-1 'const' declarations must be initialized.
// rule-2 'const' not be redeclared

// const productDiscount;
console.log(productDiscount);

const myproductDiscount = "50%";
console.log(myproductDiscount);
