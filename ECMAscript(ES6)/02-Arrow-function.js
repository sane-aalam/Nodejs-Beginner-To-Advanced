// Arrow Function
function greet() {
  console.log("Good Morning!");
}

const addtion = (a, b) => {
  console.log("first-number ", a);
  console.log("second-number", b);
  const sum = a + b;
  console.log(sum);
  return sum;
};

addtion(5, 4);

const shop = {
  purchase: function () {
    console.log(this);
  },
  newPurchase: () => {
    console.log(this);
  },
};

shop.purchase();
// { purchase: [Function: purchase] }

const obj = {
  name: "Frontend Dev",
  regularFn: function () {
    console.log("regularFn:", this.name);
  },
  arrowFn: () => {
    console.log("arrowFn:", this.name);
  },
};

obj.regularFn(); // "Frontend Dev"
obj.arrowFn(); // Undefine
