
// with array
const array = [11, 12, 14, 15, 19, 20];

const result = array.find((element) => {
  return element === 12;
});
console.log(result);

const resultindex = array.findIndex((element) => {
  return element === 12;
});
console.log(resultindex);