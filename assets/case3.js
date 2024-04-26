const ElPassEs = '01110010_01101001_01110111_01101001';
const  splitGioones = ElPassEs.split('_');
// Posiciones
let firstClave = splitGioones[0];
let secondKey = splitGioones[1];
let threeKey = splitGioones[2];
let fourKey = splitGioones[3];

// Primer clave = 114
let firstDecimalKey = Number.parseInt(firstClave, 2);
let key = String.fromCharCode(firstDecimalKey);

let secondDecimalKey = Number.parseInt(secondKey, 2);
let Key1 = String.fromCharCode(secondDecimalKey)

let threeDecimalKey = Number.parseInt(threeKey, 2);
let key2 = String.fromCharCode(threeDecimalKey)

let fourDecimalKey = Number.parseInt(fourKey , 2);
let key3 = String.fromCharCode(fourDecimalKey)

alert(`La clave desencriptada es ${key}${Key1}${key2}${key3}`)