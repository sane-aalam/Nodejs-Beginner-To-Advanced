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
  location: {
    address: "MG Road, Bangalore",
    city: "Bangalore",
    area: "MG Road",
    lat: 12.9716,
    lng: 77.5946,
    distance: "2.5 km",
  },
  availability: {
    opened: true,
    nextCloseTime: "23:59",
  },
};

// ECMAScript 2015 allows default parameter values in the function declaration:
// let's pass default parameter as contactus
function printRestaurantInfro(Restaurant, contactUs = "9819919101") {
  const { name, location, availability, priceForTwo, deliveryTime } =
    Restaurant;
  const { city, lat, lng, area } = location;
  console.log(name);
  console.log(location);
  console.log(availability);
  console.log(deliveryTime);
  console.log(city, lat, lng, area);
  console.log("connect to restaurant delivery for", parseInt(contactUs));
}

printRestaurantInfro(Restaurant);

// y = 2 pass as default parameter
function myFunction(x, y = 2) {
  // function code
}
