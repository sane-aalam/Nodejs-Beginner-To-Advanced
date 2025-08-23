console.log("file is connnected!");

// with array
const array = [11, 12, 14, 15, 19, 20];
// with object
const Restaurant = {
  id: "12345",
  name: "Pizza Hut",
  rating: {
    average: 4.2,
    totalReviews: 2345,
  },
  cuisines: ["Pizza", "Fast Food", "Italian"],
  priceForTwo: 500,
  deliveryTime: "30-40 mins",
  offers: "OFF50",
  address: "MG Road, Bangalore",
  city: "Bangalore",
  area: "MG Road",
  lat: 12.9716,
  lng: 77.5946,
  distance: "2.5 km",
  opened: true,
};

console.log(array);
console.log(Restaurant);

// for of loop with array
for (let elemeent of array) {
  console.log(elemeent);
}

// for of loop with object
// directly you can apply with object
for (let data of Object.entries(Restaurant)) {
  console.log(data);
}

// key-value way
for (let [key, value] of Object.entries(Restaurant)) {
  console.log(key, value);
}
