//1.Problem
const myButton = document.querySelector("#mybtn");
const shop = {
  name: "Khan biryani",
  price: 170,
  buy: function () {
    myButton.addEventListener("click", function () {
      console.log(this);
      console.log(`I spend this` + this.price);
    });
  },
};
// call method to buy
shop.buy();
