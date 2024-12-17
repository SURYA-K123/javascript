const object = {
  name: "surya",
  age: 21,
};

for (let i = 0; i < 6; i++) {
  console.log(i);
}

let j = 0;
do {
  console.log("Executed atleast once");
  j++;
} while (j < -10);

let n = 10;
let count = 0;
while (n > 0) {
  n = parseInt(n / 10);
  count++;
}

console.log("Number of iterations = " + count);

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log(`Breaking outer loop at i = ${i}, j = ${j}`);
      break outerLoop;
    }
    if (i === 2 && j === 1) {
      console.log(`Breaking inner loop at i = ${i}, j = ${j}`);
      break innerLoop;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
console.log("Exited the loops");
