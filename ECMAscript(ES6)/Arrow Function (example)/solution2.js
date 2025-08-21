const myButton = document.querySelector("#mybtn");
const shop = {
  name: "Khan biryani",
  price: 170,
  buy: function () {
    myButton.addEventListener("click", () => {
      console.log(`I spend this :` + this.price);
    });
  },
};
// call method to buy
shop.buy();

// Arrow Function solve this Problem
// Arrow function used parents this (used context)
// Take parents this
