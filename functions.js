console.log(square(5));
function square(number) {
  return number * number;
}

// calling
console.log(square(4));

// call by reference
const fnObj = {
  name: "surya",
  age: 21,
};
console.log(fnObj);
function callByReference(obj) {
  obj.name = "manibalan";
}

callByReference(fnObj);
console.log(fnObj);

// recursive function
const factorial = function fac(n) {
  return n < 2 ? 1 : n * arguments.callee(n - 1); // either fac or factorial
};

console.log(factorial(5));

// Function expression
const fn = () => {
  // not hoisted
  console.log("Function expression");
};
fn();

// scope in function
const num1 = 20;
const num2 = 3;
const name = "mani";

function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }
  return add();
}

console.log(getScore());

// Function closures
function outside(x) {
  let z = 50;
  console.log("Inside parent");
  function inside(y) {
    console.log("Inside parent");
    return x + y + z;
  }
  return inside;
}

const fnInside = outside(3);
console.log(fnInside(5));
console.log(outside(3)(5));

(function () {
  console.log("Hello");
})();

// arguments object in a function
function argObject() {
  console.log(arguments);
}

argObject(1, 9, 10, 8);

// parameters
function defaultParams(x, y = 10) {
  console.log(x + y);
}

defaultParams(1, 2);
defaultParams(2);

// rest parameters
function restParams(firstParam, ...remainingParams){
  console.log(firstParam);
  console.log(...remainingParams);
}

restParams(1,2,3,4);


// Arrow functions => shorter functions and non-binding of this.
function Person() {
  this.age = 0;

  this.app = function() {
    this.age++;
    console.log(this.age);
     // `this` properly refers to the person object
  }
}

const p = new Person();