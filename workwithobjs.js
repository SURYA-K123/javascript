const obj = {
  name: "surya",
  age: 21,
  1: 23,
  "!": 43,
};
console.log(obj);
console.log(obj[1]);

const a = "foo";
const b = 42;
const c = {};

const obj1 = { a, b, c };
console.log(obj1);

// object using constructor functions
function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

const p1 = new Person("john", 18, 175);
console.log(p1);
console.log(Person.prototype === p1.__proto__);

// using Object.create() method
const Animal = {
  type: "Dog",
  printType() {
    console.log(this.type);
  },
};

const dog = Object.create(Animal);
console.log(dog);

const cat = Object.create(Animal);
cat.type = "cat";
cat.printType();

// nondefined property
console.log(cat.name); // undefined

// Enumerating proprties
let p2 = new Person("ram", 19, 172);
Object.defineProperty(p2, "weight", {
  value: 58,
  enumerable: false, // Not enumerable
});
for (const key in p2) {
  console.log(p2[key]);
}

for (let key of Object.keys(p2)) {
  console.log(p2[key]);
}

console.log(Object.getOwnPropertyNames(p2));

delete p2.name;
console.log(p2);

// inheritance
// console.log("தொடரும் ...");

// Defining methods

// function Person(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//   }

// p2.sayHi = function(){
//     console.log("Hi " + this.name);
// }
// p2.sayHi();

// To share the method across all the instances add it using prototype
Person.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};
p2.sayHi();
p1.sayHi();

// defining setters and getters
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(myObj.a);
console.log(myObj.b);
myObj.c = 50;
console.log(myObj.a);

// Comparing objects
console.log(p1 === p2);
console.log(p1 === (p2 = p1));
