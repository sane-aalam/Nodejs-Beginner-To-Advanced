// used self(this)

const myButton = document.querySelector("#mybtn");
const shop = {
  name: "Khan biryani",
  price: 170,
  buy: function () {
    const _this = this;
    myButton.addEventListener("click", function () {
      console.log(_this);
      console.log(`I spend this` + _this.price);
    });
  },
};
// call method to buy
shop.buy();
