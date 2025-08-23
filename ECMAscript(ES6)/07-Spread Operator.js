console.log("file is connnected!");

// with array
const arr1 = [11, 12, 13, 14, 15, 16, 17];
const arr2 = [12, 14, 14, 191, 1991];
const newarr3 = [...arr1, ...arr2];
console.log(newarr3);

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

// Spread Operator
const newRestaurant = { contact: "+919998180101", ...Restaurant };
console.log(newRestaurant);
