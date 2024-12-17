let buffer = new ArrayBuffer(16);
console.log(buffer);

let slicedPart = buffer.slice(0, 5);
console.log(slicedPart);

const originalBuffer = new ArrayBuffer(16);
const transferredBuffer = originalBuffer.transfer(6); // bytes
console.log(originalBuffer.byteLength);
console.log(transferredBuffer.byteLength);

// console.log(transferredSharedBuffer.byteLength);

const buffer1 = new ArrayBuffer(16);
console.log(buffer1);
const intArray = new Uint8Array(buffer1, 3, 4);
console.log(intArray);
console.log(intArray.byteOffset);

const Uint8Array1 = new Uint8Array(buffer1);
console.log(Uint8Array1);
Uint8Array1.set([1, 2, 3]);
console.log(Uint8Array1.byteLength);
console.log(Uint8Array1.byteOffset);
Uint8Array1[true] = 45;
console.log(Uint8Array1[true]);
console.log(Uint8Array1.byteLength);

// let arr = [3,4,5];
// arr.s = true;
// console.log(arr.length);

const exampleBuffer = new ArrayBuffer(16);
if (exampleBuffer.byteLength === 16) {
  console.log("Yes the bytelength is correct");
} else {
  console.log("Not a required bytelength is specified");
}

const int32View = new Int32Array(exampleBuffer);
console.log(int32View.byteLength);

for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

console.log(int32View);

console.log("-----------------------------line 49------------------------------");

const int16View = new Int16Array(exampleBuffer);
console.log(exampleBuffer);
console.log(int16View);

for (let i = 0; i < int16View.length; i++) {
  console.log(`Entry ${i}: ${int16View[i]}`);
}

int16View[0] = 32;
console.log(`Entry 0 in the 32-bit array is now ${int32View[0]}`);
console.log(exampleBuffer);

// Using buffer to store text
const textBuffer = new ArrayBuffer(5);
const uIntText = new Uint8Array(textBuffer);

uIntText.set([65, 112, 112, 108, 101]);

console.log(new TextDecoder().decode(uIntText));
const text = String.fromCharCode(...uIntText);
console.log(text);

// complex details - person details
const complexBuffer = new ArrayBuffer(24);
const idView = new Uint32Array(complexBuffer, 0, 1);
const usernameView = new Uint8Array(complexBuffer, 4, 16);
const amountDueView = new Float32Array(complexBuffer, 20, 1);
idView.set([265235]);
usernameView.set([115, 117, 114, 121, 97]);
amountDueView.set([1000.564]);
console.log(idView);
console.log(new TextDecoder().decode(usernameView));
console.log(amountDueView);

// conversion to normal Array
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);
console.log(normalArray);

const normalArraySpread = [...typedArray];
console.log(normalArraySpread);

const test = new ArrayBuffer(12);
const testview = new DataView(test);
testview.setUint32(0, 50);
testview.setUint32(4, 1);
testview.setUint32(8, 6);

const testInt = new Uint16Array(test);

console.log(testview);
console.log(testInt);
console.log(testInt[5]);
console.log(testview.getUint16(5));

console.log(Array.from(testInt));
