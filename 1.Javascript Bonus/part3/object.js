const infomation = {
  id: "10894",
  name: "Biryani Hotel",
  cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  locality: "2nd Stage",
  areaName: "BTM Layout",
  costForTwo: "₹350 for two",
  cuisines: ["Pizzas", "Pizza", "Hotel"],
  avgRating: 4.1,
  parentId: "721",
  avgRatingString: "4.1",
  totalRatingsString: "10K+",
  deliveryTime: 31,
  priceDependTime: {
    Jan: "₹350",
    Feb: "₹450",
    Dec: "₹550",
  },
};

// using [] accessing the value
const name = infomation["name"];
const cloudinaryImageId = infomation["cloudinaryImageId"];
const areaName = infomation["areaName"];
const locality = infomation["locality"];
const deliveryTime = infomation.deliveryTime;

// . by accessing the value
const priceDependTimeJan = infomation.priceDependTime.Jan;
const priceDependTimeFab = infomation.priceDependTime.Feb;
const priceDependTimeDec = infomation.priceDependTime.Dec;

// print all data
console.log(name);
console.log(cloudinaryImageId);
console.log(areaName, locality, deliveryTime);
console.log(priceDependTimeDec, priceDependTimeFab, priceDependTimeJan);

// function to create cuisines well format way
function cuisinesFormatedOrder(cuisines) {
  const newcuisines = cuisines.join(",   ");
  return newcuisines;
}

const cuisines = infomation["cuisines"];
console.log(cuisines);

const newcuisines = cuisinesFormatedOrder(cuisines);
console.log(newcuisines);
