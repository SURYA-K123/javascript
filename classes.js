class Vehicle {
  constructor(type) {
    this.type = type;
  }
  horn() {
    console.log("This is horn sound");
  }
}

const van = new Vehicle("Van");
van.horn();

// new MyClass();    // no hoisting so creates reference error
class MyClass {
  // static myStaticField = "This is a static field"; // one way
  constructor() {
    MyClass.myStaticField = "This is a static field"
    this.myField = "foo";
    this.subtract = function () {
      console.log("1 - 1 = 0");
    };
  }
  add() {
    console.log(MyClass.myStaticField);
    console.log("1 + 1 = 2");
  }
}

console.log(new MyClass().add());

// class expressions
// console.log(MyClass1.prototype); // error referencing
const MyClass1 = {}; // define inside

const m = new MyClass();
const n = new MyClass();

console.log(m.subtract === n.subtract);
console.log(m.add === n.add);

class Student {
  #name;
  #age;
  #department;
  constructor(name, age, department) {
    this.#name = name;
    this.#age = age;
    this.#department = department;
  }

  getName() {
    return this.#name;
  }

  #getAge() {
    return this.#age;
  }

  getDepartment() {
    return this.#department;
  }

  setName(newName) {
    this.#name = newName;
  }

  setAge(newAge) {
    this.#age = newAge;
  }

  setDepartment(newDepartment) {
    this.#department = newDepartment;
  }

  ageDifference(anotherStudent) {
    return this.#age - anotherStudent.#age;
  }
}

const rajesh = new Student("Rajesh", 20, "CSE");
const ramesh = new Student("Ramesh", 18, "EEE");
console.log(rajesh);

// accessing private field of another instance of the same class
console.log(rajesh.ageDifference(ramesh));

class Employee {
  #name; // deletion not possible for private fields
  #id;
  age = 21; // public property
  constructor(name) {
    this.#name = name;
  }

  set empId(id) {
    this.#id = id;
  }

  get empId() {
    return this.#id;
  }
  static org;
  static {
    Employee.org = "zoho";
    console.log("hello");
  }
}

const surya = new Employee("Surya");
surya.empId = "tt-0525";

console.log(surya.age);
console.log(Employee.org);

// Inheritance
class Parent {
  #className;

  constructor(privateProperty) {
    this.#className = privateProperty;
  }
  showPrivate() {
    return this.#className;
  }
}

class Child extends Parent {
  #className;
  constructor(childName, parentName) {
    super(parentName);
    this.#className = childName;
  }

  showPrivate() {
    return this.#className;
  }

  showParentPrivate(){
    return super.showPrivate();
  }
}

let child = new Child("child class", "parent class using child class");
child.dummydata = "dummydata";
console.log(child.showPrivate());
console.log(child.showParentPrivate());
console.log(child.dummydata);

let parent = new Parent("parent class");
console.log(parent.showPrivate());

parent = child;
console.log(parent.showPrivate());
