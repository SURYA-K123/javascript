var x = 5;
x <<= 1;
console.log(x);

var x = -9;
x >>= 2;
console.log(x);

var x = -20;
x >>>= 20;
console.log(x);

var x = 28346;
var y = true;

x ||= y;
console.log(x);

const val = null ?? "default";
console.log(val);

console.log("4" == 4);
console.log(4 === "4");

console.log("4" != 4);
console.log(4 !== "4");

console.log(15 & 5);
console.log(3 | 4);

const isOpen = true || false ? true : false;

console.log(+"5");
console.log(+false);

// unary operators

const object1 = {
  name: "surya",
  age: 21,
};

delete object1.name;
console.log(object1);

console.log(typeof object1);

// relational operators

console.log("age" in object1);

function fn() {}
console.log(fn instanceof Object);

const z = 3 + 4;
console.log(z);

const x1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x1, x1, x1, x1, x1];

for (let i = 0, j = 9; i <= j; i++, j--) {
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}

function add(num1, num2) {
  return num1 + num2;
}

var x = 10;

const result = (x += 5, x * 2, x - 3);

console.log(result); // Output: 12
console.log(x);      // Output: 15


// console.log(void add(3, 5));
// const trees = ["redwood", "bay", "cedar", "oak", "maple"];
// console.log(0 in trees);
// console.log("slice" in trees);
// console.log("splice" in trees);

// console.log(trees instanceof Array);
// console.log(trees instanceof Object);
// console.log(trees instanceof Number);

// let m = null;
// let mob = {};
// mob.m = 30;
// console.log(m?.a);

// function nam(abc, cde){
//   console.log(this);
//   abc(cde);
// }
// function abc(cde){
//   console.log(this);
//   cde();
// }

// function cde(){
//   console.log(this);
// }

// nam(abc, cde);

// var s = document.getElementById("id").addEventListener("click", ()=>{
//   console.log(this);
// })

const person = {
  name: "Charlie",
  greet: function () {
    console.log("Outer this:", this.name); // `this` refers to `person`

    const innerGreet = () => {
      console.log("Inner this:", this.name);
      const innerinnerGreet = () => {
        console.log("Inner Inner this:", this.name);
      };
      innerinnerGreet();
    };

    innerGreet(); // Calls the inner arrow function
  },
};

person.greet();
// Output:
// Outer this: Charlie
// Inner this: Charlie

console.log(1 << 3);
console.log(10 >> 1);
