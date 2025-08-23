// JavaScript objects cannot be implemented purely on top of hash maps.
// Try this in your browser console:

var foo = {
  a: true,
  b: true,
  z: true,
  c: true,
};

for (var i in foo) {
  console.log(i);
}

// but let's you try this class Map:

// declaration of map
// setting the values
// sizzing of map
// getting the values

const myHashMap = new Map();
myHashMap.set("1", "value1");
myHashMap.set("2", "value2");
myHashMap.set("3", "value3");

// size of map
console.log(myHashMap.size);
console.log(`Map size: ${myHashMap.size}`);

// getting the values
console.log(`Key: "1", Value: ${myHashMap.get("1")}`);
console.log(`Key: "2", Value: ${myHashMap.get("2")}`);
console.log(`Key: "3", Value: ${myHashMap.get("3")}`);

// future you can write down this code

const map = {
  map_name_1: map_value_1,
  map_name_2: map_value_2,
  map_name_3: map_value_3,
  map_name_4: map_value_4,
};
