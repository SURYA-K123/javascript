// Built in iterators
const arr = [1, 2, 3];

const values = arr.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());

// iterator protocol for user-defined object
function gen() {
  const iterable = {
    count: 0,
    next() {
      return {
        value: this.count++,
        done: this.count >= 5,
      };
    },
  };
  return iterable;
}

let iterable = gen();
let iter = "";
do {
  iter = iterable.next();
  console.log(iter.value);
} while (!iter.done);

let i1 = gen();

function* generatorExample() {
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

const genEx = generatorExample();
console.log(genEx.next());
console.log(genEx.next());
console.log(genEx.next());
console.log(genEx.next());
console.log(genEx.next());

for(let i of genEx){
  console.log(i);
  console.log("Not runs");
}

for (let i of generatorExample()) {
  console.log(i);
}

const iterableObject = {
  *[Symbol.iterator]() {
    for (let j = 0; j < 5; j++) {
      yield j;
    }
  },
};

for (const element of iterableObject) {
  console.log(element);
}

console.log([...iterableObject]);

function* yield() {
  yield* [1, 2, 3];
}
for (let i of yield()) {
  console.log(i);
}
