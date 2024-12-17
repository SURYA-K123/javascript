const map = new Map();
map.set("name", "surya");
map.set("age", 21);
map.set("team", "zoho inventory");
map.set(23, 34);
map.set({ name: "surya" }, 21);
console.log(map);
console.log(map.size);
console.log(map.get("team"));
console.log(map.has("age"));
console.log(map.delete("age"));
console.log(map);

// Traversing
for (const [key, val] of map) {
  console.log(`${key} : ${val}`);
}

// map.clear();
// console.log(map);
const myObj = {
  myMethod: function (params) {
    console.log("Hello");
  },
  myOtherMethod(params) {},
};
myObj.myMethod();

const ins1 = Object.create(myObj);

myObj.abcd = "abcde";

console.log(ins1.abcd);

let weakMapObj = { name: "surya" };
const weakMap = new WeakMap();
weakMap.set(weakMapObj, 123);
console.log(weakMap.get(weakMapObj));
weakMapObj = null;
console.log(weakMap.get(weakMapObj));

let s = new Set();
s.add(1);
s.add("1");
console.log(s.size);
console.log(s);
console.log(NaN === NaN);

console.log(weakMap);
