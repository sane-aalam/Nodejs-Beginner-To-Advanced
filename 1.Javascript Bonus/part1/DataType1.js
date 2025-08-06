// DataTypes:

var val1 = "New World"; //returns String
var val2 = 5; //returns Number
var val3 = true; //returns Boolean
var val4 = [1, 2, 3]; //returns Object
var val5 = null; //returns Object (Value is null, but type is still an object)
var val6; //returns Undefined
var val7 = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
var val8 = Number.MAX_SAFE_INTEGER + 1;

// Type	typeof return value	Object wrapper
// Null	"object"	N/A
// Undefined	"undefined"	N/A
// Boolean	"boolean"	Boolean
// Number	"number"	Number
// BigInt	"bigint"	BigInt
// String	"string"	String
// Symbol	"symbol"	Symbol

// print all data types
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);
console.log(val8);
