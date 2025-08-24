
db.students.insertOne({
  name: "Rahul Sharma",
  age: 22,
  course: "MongoDB Basics",
});

// db.students.insertOne({firstname:"Sahuail", lastname:"khan"})
db.students.insertOne({
  id: "12345",
  nameres: "Pizza Hut",
  average: 4.1,
  totalReviews: 2345,
  cuisines: ["Pizza", "Fast Food", "Italian"],
  priceForTwo: 500,
  deliveryTime: "30-40 mins",
  offers: "OFF50",
  address: "MG Road, Bangalore",
  city: "Bangalore",
  area: "MG Road",
  lat: 12.9716,
});

// insertone, insertMany
db.students.insertOne({
  id: "12345",
  nameres: "Pizza Hut",
  average: 4.1,
  totalReviews: 2345,
  cuisines: ["Pizza", "Fast Food", "Italian"],
  priceForTwo: 500,
  deliveryTime: "30-40 mins",
  offers: "OFF50",
  address: "MG Road, Bangalore",
  city: "Bangalore",
  area: "MG Road",
  lat: 12.9716,
  lng: 77.5946,
});

db.students.insertMany([
  {
    id: "12345",
    nameres: "Pizza Hut",
    average: 4.1,
    totalReviews: 2345,
    cuisines: ["Pizza", "Fast Food", "Italian"],
    priceForTwo: 500,
    deliveryTime: "30-40 mins",
    offers: "OFF50",
    address: "MG Road, Bangalore",
    city: "Bangalore",
    area: "MG Road",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "12345",
    nameres: "Pizza Hut",
    average: 4.1,
    totalReviews: 2345,
    cuisines: ["Pizza", "Fast Food", "Italian"],
    priceForTwo: 500,
    deliveryTime: "30-40 mins",
    offers: "OFF50",
    address: "MG Road, Bangalore",
    city: "Bangalore",
    area: "MG Road",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "12345",
    nameres: "Pizza Hut",
    average: 4.1,
    totalReviews: 2345,
    cuisines: ["Pizza", "Fast Food", "Italian"],
    priceForTwo: 500,
    deliveryTime: "30-40 mins",
    offers: "OFF50",
    address: "MG Road, Bangalore",
    city: "Bangalore",
    area: "MG Road",
    lat: 12.9716,
    lng: 77.5946,
  },
]);

db.students.findOne();
