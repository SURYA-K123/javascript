const target = {
  name: "Ram",
  age: 25,
  _private: "secret",
};

const handler = {
  get(target, prop, receiver) {
    console.log(`Getting property: ${prop}`);
    return prop in target ? target[prop] : "Property does not exist";
  },

  set(target, prop, value, receiver) {
    console.log(`Setting property: ${prop} to ${value}`);
    target[prop] = value;
    return true;
  },

  has(target, prop) {
    console.log(`Checking if ${prop} is in target`);
    return !prop.startsWith("_") && prop in target;
  },

  deleteProperty(target, prop) {
    console.log(`Deleting property: ${prop}`);
    if (prop.startsWith("_")) {
      throw new Error(`Cannot delete private property: ${prop}`);
    }
    delete target[prop];
    return true;
  },

  apply(target, thisArg, args) {
    console.log(`Function called with arguments: ${args}`);
    return target(...args);
  },

  construct(target, args, newTarget) {
    console.log(`Constructing object with arguments: ${args}`);
    return new target(...args);
  },

  getOwnPropertyDescriptor(target, prop) {
    console.log(`Getting descriptor for: ${prop}`);
    return Object.getOwnPropertyDescriptor(target, prop);
  },

  defineProperty(target, prop, descriptor) {
    console.log(`Defining property: ${prop}`);
    Object.defineProperty(target, prop, descriptor);
    return true;
  },

  ownKeys(target) {
    console.log(`Listing keys`);
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },

  isExtensible(target) {
    console.log("Checking if extensible");
    return Object.isExtensible(target);
  },

  setPrototypeOf(target, proto) {
    console.log("Setting prototype");
    Object.setPrototypeOf(target, proto);
    return true;
  },

  getPrototypeOf(target) {
    console.log("Getting prototype");
    return Object.getPrototypeOf(target);
  },

  preventExtensions(target) {
    console.log("Preventing extensions");
    Object.preventExtensions(target);
    return true;
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);
proxy.age = 30;
console.log("age" in proxy);
console.log("_private" in proxy);
delete proxy.age;

Object.defineProperty(proxy, "newProp", { value: 42, enumerable: true });
console.log(target);

console.log(Object.getOwnPropertyDescriptor(proxy, "newProp"));
console.log(Object.keys(proxy));

console.log(Object.isExtensible(proxy));

Object.preventExtensions(proxy);
Object.setPrototypeOf(proxy, { newProto: true });
console.log(Object.getPrototypeOf(proxy));
console.log(target);

const proxy1 = Proxy.revocable(target, handler);
proxy1.revoke();
