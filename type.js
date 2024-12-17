const buff = new ArrayBuffer(16);
const dataview = new DataView(buff);
console.log(buff);

console.log(dataview);

dataview.setUint32(0, 7);
dataview.setUint32(4, 8);
dataview.setUint32(8, 5);
dataview.setUint32(12, 6);

console.log(dataview);

const uint32view = new Uint32Array(buff);
const uint8view = new Uint8Array(buff);
const uint16view = new Uint16Array(buff);
const float32view = new Float32Array(buff);
const float64view = new Float64Array(buff);


uint32view.set([1,2,3,4])
console.log(dataview);

console.log(uint32view);
console.log(uint8view);
console.log(uint16view);
console.log(float32view);
console.log(float64view);