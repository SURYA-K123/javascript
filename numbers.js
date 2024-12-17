const num = 98794358934845673846578 ** 20;
console.log(num);

const octet = 0o3456;
console.log(octet);

const hex = 0xabc + 2;
console.log(hex);

console.log(Number.MAX_VALUE * 2);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.EPSILON);

const fraction = 12345.678936457;

console.log(Number.isFinite(42));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite("42"));
console.log(Number.isFinite(3.14));
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(-1 / 0));

console.log("IsInteger");
console.log(Number.isInteger(34.34));
console.log(Number.isInteger(34));
console.log(Number.isInteger("34"));

console.log(fraction.toExponential(2));
console.log(fraction.toExponential(4));
console.log(fraction.toExponential());

const fixed = 12345.6789;
console.log(fixed.toFixed(2));
console.log(fixed.toFixed(0));
console.log(fixed.toFixed(5));

console.log("---to precision---");
console.log(fixed.toPrecision(3));

const b1 = 11n;
console.log(b1);

const b2 = BigInt("843");
console.log(b2);
const b3 = b1 + b2;
console.log(b3);

const b4 = b1 ** b2;
console.log(b4);

// Floating point numbers are not allowed

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const weekday = date.getDay();

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(weekday);
console.log(date.toLocaleString());

const date1 = new Date("2024-12-03T14:30:15.123");
console.log(date1);

const time = new Date();
const hour = time.getHours();
const minute = time.getMinutes();
const second = time.getSeconds();

console.log(hour + ":" + minute + ":" + second);

console.log(+"3" + +"4");

console.log(Number.parseFloat(12.23));

// Math Funtions
// Absolute value
console.log(Math.abs(-5));

// Trigonometric functions (in radians)
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(Math.PI)); // -1
console.log(Math.tan(Math.PI / 4)); // 1

// Inverse trigonometric functions (return radians)
console.log(Math.asin(1));
console.log(Math.acos(-1));
console.log(Math.atan(1));
console.log(Math.atan2(1, 1));

// Hyperbolic functions
console.log(Math.sinh(1));
console.log(Math.cosh(1));
console.log(Math.tanh(1));

// Inverse hyperbolic functions
console.log(Math.asinh(1));
console.log(Math.acosh(2));
console.log(Math.atanh(0.5));

// Exponential and logarithmic functions
console.log(Math.pow(2, 3));
console.log(Math.exp(1));
console.log(Math.expm1(1));
console.log(Math.log(10));
console.log(Math.log10(100));
console.log(Math.log1p(1));
console.log(Math.log2(8));

// Rounding and truncation functions
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.round(4.7));
console.log(Math.fround(4.7));
console.log(Math.trunc(4.7));

// Square root, cube root, and hypot
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.hypot(3, 4));

// Sign of a number
console.log(Math.sign(3)); // 1 (positive number)
console.log(Math.sign(-3)); // -1 (negative number)
console.log(Math.sign(0)); // 0 (zero)

// Bitwise operations
console.log(Math.clz32(1));
console.log(Math.imul(2, 3));
