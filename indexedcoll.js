const arr1 = new Array(1, 2, 3, 4);
const arr2 = Array(1, 2, 3, 4);
const arr3 = [1, 2, 3, 4];

console.log(arr1);
console.log(arr2);
console.log(arr3);

const arr4 = new Array(6);
const arr5 = Array(5);
const arr6 = [];
arr6.length = 10;

console.log(arr4.length);
console.log(arr5.length);
console.log(arr6.length);

// no negatives pls if negative value is an element go with of() method
// const ar = new Array(-3);
// console.log(ar);

// const ar = [];
// ar.length = -10;
// console.log(ar);

const arr7 = Array.of(-1);
console.log(arr7);

const arr8 = [];
arr8["abc"] = 10;
arr8[0] = "apple";
arr8[1] = "banana";
console.log(arr8.length + " length");

const cats = [];
cats[30] = ["Dusty"];
console.log(cats);

// Refering to array elements
const numbersArr = ["one", "two", "three"];
numbersArr[2]; // three
numbersArr["length"]; // 3

// iterating through arrays
const colors = ["red", "green", , "blue"];
colors.forEach((color) => {
  // ignores empty
  console.log(color);
});

for (let i = 0; i < colors.length; i++) {
  // considers empty as undefined
  console.log(colors[i]);
}

// Array Methods
const numbers = [1, 2, 3, 4, 5];
const alphas = ["a", "b", "c"];
console.log(numbers.concat(alphas));

console.log(numbers.join(" "));

alphas.push("d");

console.log(alphas);

alphas.pop();
console.log(alphas);

numbers.shift();
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

console.log(numbers.slice(1, 4));

console.log(numbers.at(-1));

numbers.splice(1, 2, 9, 10, 11, 12, 13);
console.log(numbers.join(" "));

alphas.reverse();
console.log(alphas);
alphas.reverse();

const newnum = [1, 2, 3, 4, [20, 21, 22], [9, 10, 11]];
console.log(newnum.flat());

const nums = [4, 2, 8, 10];
nums.sort();
console.log(nums);

const strings = ["invetory", "books", "pay", "commerce", "pay"];
strings.sort();
console.log(strings);

console.log(strings.indexOf("pay")); // optionally accepts second argument to start its search from the specified index
console.log(strings.lastIndexOf("pay")); // optionally accepts second argument to start its search from the specified index

const mappedArr = strings.map((item) => item.toUpperCase());
console.log(mappedArr);

const flatMappedArr = strings.flatMap((item) => [
  item.toUpperCase(),
  item.toLowerCase(),
]);
console.log(flatMappedArr);

const toFilterArray = numbers.concat(alphas);

const stringFilteredArray = toFilterArray.filter(
  (item) => typeof item === "string"
);
console.log(stringFilteredArray);

const stringFindArray = toFilterArray.find((item) => typeof item === "string");
console.log(stringFindArray);

const stringFindLastArray = toFilterArray.findLast(
  (item) => typeof item === "string"
);
console.log(stringFindLastArray);

// same as find and findLast we have findIndex and findLastIndex

console.log(strings);

console.log(strings.every((item) => typeof item === "string"));

// some() for atleast one

const toReduceArr = [20, 34, 15];
const reducedValue = toReduceArr.reduce((acumulated, currentValue) => {
  return acumulated + currentValue;
});
console.log(reducedValue);

let arr = [1, 2, 3, 11, 12, 13];
let tempObj = Object.groupBy(arr, (item) => {
  if (item >= 10) {
    return "twodigit";
  }
  return "onedigit";
});

console.log(tempObj);

// sparse arrays
const sparseArr = [1, 2];
sparseArr.length = 5;
console.log([...sparseArr]); // empty slots not equals to undefined

//  Multidimensional Array
const multiArray = [];
multiArray[0] = [1, 2];
multiArray[1] = [3, 4, 5];
console.log(multiArray);

// Array like objects
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}

printArguments(1, 2, 3);
