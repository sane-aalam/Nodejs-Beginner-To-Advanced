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

Restaurant.map((res) => {
  //  {id: '12345', name: 'Pizza Hut', rating: {…}, cuisines: Array(3), priceForTwo: 500, …}
  //  {id: '12345', name: 'Pizza Hut', rating: {…}, cuisines: Array(3), priceForTwo: 500, …}
  //  {id: '12345', name: 'Pizza Hut', rating: {…}, cuisines: Array(3), priceForTwo: 500, …}
  console.log(res);
  const {
    id,
    name,
    rating,
    cuisines,
    priceForTwo,
    offers,
    address,
    city,
    area,
    distance,
  } = res;
  console.log("id", id);
  console.log("name", name);
  console.log("cuisines", cuisines);
  console.log("priceForTwo", priceForTwo);
  console.log("distance,", distance);
  console.log(`discount offers ${offers}`);
  console.log(`location idea ${(address, city, area)}`);
});

// priceForTwo 500
// code.js:83 distance, 2.5 km
// code.js:84 discount offers OFF50
// code.js:85 location idea MG Road
// code.js:66 {id: '12345', name: 'Pizza Hut', rating: {…}, cuisines: Array(3), priceForTwo: 500, …}
// code.js:79 id 12345
// code.js:80 name Pizza Hut
// code.js:81 cuisines (3) ['Pizza', 'Fast Food', 'Italian']
// code.js:82 priceForTwo 500
// code.js:83 distance, 2.5 km
// code.js:84 discount offers OFF50
// code.js:85 location idea MG Road
