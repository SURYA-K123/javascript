console.log(blockScope());

function blockScope() {
  return 10;
}

console.log(a);

if (true) {
  if (true) {
    var a = 90;
  }
}

function forVar() {
  console.log(x);
  var x = 10;
}

// operators
let strnum = "38";
console.log(strnum / 2);

// literals
const coffees = ["French Roast", "Colombian", "Kona"];
const coffees1 = ["French Roast", , "Colombian", "Kona"];
const coffees2 = ["French Roast", "Colombian", "Kona", ,];

console.log(coffees.length);
console.log(coffees1.length);
console.log(coffees2.length);

let boolean = true;

var int = 356;

var float = 3e3;

console.log(int);
console.log(float);

const obj = {
  name: "surya",
  age: 20,
  7: 56,
  "!": "wrong identifier",
};

console.log(obj[7]);
console.log(obj["!"]);

let str = "joy's cat";
console.log(str);

console.log(`My name is ${obj.name}`);

console.log(this);

var x;
x = 10;

"use strict";
function name(){
    console.log(this);
}
name();

const obj = {
  name: "My Object",
  outer: () => {
    console.log("Outer this:", this); // 'this' is lexically bound, refers to the surrounding context (global or undefined in strict mode)

    const inner = () => {
      console.log("Inner this:", this); // 'this' again refers to the same context as the outer arrow function
    };
    inner(); // calling the inner arrow function
  },
};

obj.outer(); // Invoking the outer function on the object

console.log("35" / "5");

let value = 123.98;
console.log(Number.parseFloat(value));

const arr = [1,2,3, "surya"];
const arr1 = new Array(1,2,3);
console.log(typeof arr + " " + arr.length);
console.log(typeof arr1);

const str = "abc";
const str1 = new String("str");
console.log(typeof str);
console.log(typeof str1);


let hex = 0b1;
console.log(typeof hex);
console.log(hex);

let a = 10;
let b = 3.5;
let c = a + b;
console.log(c);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log("\xA9");
