console.log("fine is connnected!");
const Restaurant = [
  {
    id: "12345",
    name: "Pizza Hut",
    rating: {
      average: 4.1,
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
  },
  {
    id: "12345",
    name: "Pizza Hut",
    rating: {
      average: 4.4,
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
  },
  {
    id: "12345",
    name: "Pizza Hut",
    rating: {
      average: 4.1,
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
  },
];

// Filter can be top Restaurant
// Filter can be opened Restaurant
// Filter can be closed Restaurant
// Filter can be address by
// Filter can be price
// filter can be distance

const filterRestaurant = Restaurant.filter((res) => {
  return res.rating.average > 4.1;
});

// only one Restaurant which have average rating more than 4.1
// filterRestaurant printed
console.log(filterRestaurant);
