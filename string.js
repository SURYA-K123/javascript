const abc = "\uD87E\uDC04";
console.log(abc.length);

// string object
const strobj = new String("string");
console.log(strobj);
console.log(typeof strobj);

// strings using escape sequences
console.log("\xA9");
console.log("\u00A9");

// eval function considers the input as a javascript code to be executed
const codeStr = "for(let i=0;i<5;i++){console.log(i+1)}";
eval(codeStr);

let str = "Hello, world! Hello, everyone!";
str[0] = "A"; // no effect

const text = "A𝄞B"; // "A", "𝄞" (U+1D11E), "B"

console.log(text.length);

// Using charCodeAt()
console.log(text.charCodeAt(1));
console.log(text.charCodeAt(2));

// Using codePointAt()
console.log(text.codePointAt(1));

// Regular BMP characters
console.log(text.charCodeAt(0));
console.log(text.codePointAt(0));

const emoji = String.fromCodePoint(0x1f600);
console.log("Length is :" + emoji.length);

console.log(str.charAt(0));

console.log(str.indexOf("Hello"));

console.log(str.indexOf("world"));

console.log(str.indexOf("Hello", 8));

console.log(str.indexOf("Hi"));

console.log(str.lastIndexOf("Hello"));

console.log(str.lastIndexOf("world"));

console.log(str.lastIndexOf("Hello", 12));

console.log(str.lastIndexOf("Hi"));

console.log(str.startsWith("Hello")); // Output: true

console.log(str.startsWith("world")); // Output: false

console.log(str.startsWith("world", 7)); // Output: true

console.log(str.endsWith("everyone!")); // Output: true

console.log(str.endsWith("Hello")); // Output: false

console.log(str.endsWith("world!", 13)); // Output: true

let str1 = "hi";
let str2 = "bye";
console.log(str.concat(str1, str2));

console.log(str.split(" "));
console.log(str.split("", 5));

console.log(str.slice(2, 5));
let arr = [4, 2, 7, 9];
console.log(arr.slice(2, 4));

console.log(str.substring(3, 9));
console.log(str.substr(3, 3));

let str5 = "JavaScript is awesome! is awesome";

console.log(str5.match(/is/)); // both captures the group
let matchAll = str5.matchAll(/is/g);
for (let match of matchAll) {
  console.log(match);
}

console.log(str5.search(/is/));
console.log(str5.search(/is/));

let resultReplace = str5.replace(/is/, "was");
console.log(resultReplace);

let resultReplaceAll = str5.replaceAll(/is/g, "was");
console.log(resultReplaceAll);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.repeat(3));

let str3 = "e\u0301";
console.log(str3);

let normalizedStr = str3.normalize("NFC");
console.log(normalizedStr);

const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + "."
);


// Internationalization
const july172014 = new Date(Date.now());

const options = {
  year: "2-digit",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-IN", options).format;

console.log(americanDateTime(july172014));

const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259));

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); 

