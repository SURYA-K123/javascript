const str =
  "This is a sample passage for learning \f \x23 regular expressions one1 two2?\0 \t";
console.log(str);

console.log("-------------------------");

console.log(str.match(new RegExp("[^a-h]", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("reg...", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\d", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\D", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\w", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\W", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\s", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\S", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\t", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\f", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\b.", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\x23", "g")));

console.log(
  "---------------------------------------------------------------------------"
);

console.log("Assertions");

console.log(str.match(new RegExp("^T", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("\\0$", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("e(?=x)", "g")));

console.log("-------------------------");

console.log(str.match(new RegExp("(?<=e)x", "g")));

console.log("-------------------------");

console.log(
  "---------------------------------------------------------------------------"
);

console.log("Groups and backreferences");

console.log([...str.matchAll(new RegExp("([a-z]+) ([a-z]+)", "g"))]);

console.log(
  "<strong>This is a strong tag<strong> <span>This is a span tag<span>".match(
    /(?<tag><[a-z]+>).*\k<tag>/g
  )
);

const re = /<[a-z/]+?>/g;
console.log("<strong><span></span></strong><><><>".match(re));

// Functions in RegExp
let text = "Hello World of Regular expressions of of OF";
let regex = new RegExp("of");

// regex method
console.log(regex.test(text));
console.log(regex.exec(text));
console.log(regex.exec(text));

// String methods
console.log(text.match(regex));
console.log(text.search(regex));
console.log(text.replace(regex, "in"));
console.log(text.replaceAll("of", "in")); // only works with string no regex

// Flags
let regex1 = new RegExp("of", "gi");
console.log(regex1.exec(text));
console.log(regex1.exec(text));
console.log(regex1.exec(text));
console.log(regex1.exec(text));
console.log(regex1.exec(text));

// i - for case insesitive
// m - multiline
// s - considers newline characters as a match for dot (.)
const text1 = `hello\nhello\f`;
console.log(text1.match(/^h/gm));

const t = "this is word";
for(let m of t.matchAll(/\b/g)){
    console.log(m);
}

console.log(text1.match(/./gs));