import { shuffle } from "lodash";

const numbers = [1, 2, 3, 4, 5];
console.log(shuffle(numbers));

function name() {
  return "Zoho";
}

function defaultFunction(){
    return "This is a default function";
}

export { name }; // alias name can also be assigned at the place of export itself
export default defaultFunction; 