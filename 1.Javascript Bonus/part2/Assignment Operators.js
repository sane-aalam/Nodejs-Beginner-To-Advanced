let itemPrice = 100;
let quantity = 2;

let total = itemPrice * quantity;
console.log("=  Assigned Total:", total);

total += 50;
console.log("+= After Adding Extra:", total);

total -= 30;
console.log("-= After Discount:", total);

total *= 1.18;
console.log("*= After Tax:", total);

total /= 2;
console.log("/= Split Among 2:", total);

let balance = 105;
balance %= 100;
console.log("%= Remaining Balance:", balance);

let power = 2;
power **= 3;
console.log("**= Power Cubed:", power);

let a = 5;
a <<= 2;
console.log("<<= Bitwise Left Shift:", a);

let b = 20;
b >>= 2;
console.log(">>= Bitwise Right Shift:", b);

let c = 5;
c &= 3;
console.log("&= Bitwise AND:", c);

let d = 5;
d |= 3;
console.log("|= Bitwise OR:", d);

let e = 5;
e ^= 3;
console.log("^= Bitwise XOR:", e);
