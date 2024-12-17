import df, { name } from "./index.js";
import { name as fullName } from "./index1.js";
import colors from "./colors.json" with { type: "json" };
import { add, subtract, toUpperCase } from './index1.js';
import styles from "./index.css" with { type: "css" };
import * as Module from "./moduleobj.js"; // all imports are hoisted
console.log(name());
console.log(fullName());
console.log(df());

Module.sayHi();
console.log(Module.name);

console.log(`${colors.primary}`);

console.log(toUpperCase("surya"));

import("./index1.js").then(() => console.log("Module loaded successfully").catch(() => console.log("Error loading module")).finally(()=>console.log("Finally")));