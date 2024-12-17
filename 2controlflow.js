{
  x = 2;
}
console.log(x);

let flag = true;
if (flag) {
  flag = !flag;
} else {
  flag = !flag;
}

if (false || undefined || null || 0 || NaN) {
  console.log("All are false");
} else {
  console.log("All are true");
}

let switchCase = "case2";
switch (switchCase) {
  case "case1":
    console.log(switchCase);
    break;
  default:
    console.log("default");
    break;
  case "case2":
    console.log(switchCase);
    break;
}

let fruitType = "Apples";

switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");

function getMonthName(mo) {
  mo--;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo";
  }
}
let monthName;
try {
  monthName = getMonthName(0);
} catch (e) {
  monthName = "unknown";
  console.log(e);
}

var x = 1;
{
  var x = 2;
}
console.log(x);

if ((x = 5)) {
  console.log(x);
}

const bool = new Boolean(true);
console.log(bool);
if (bool.valueOf()) {
  console.log("Hello");
}

try {
  console.log("a");
  try {
    console.log(a);
  } catch (e) {
    console.log(e.name);
    console.log(e.message);
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("finally block");
}
