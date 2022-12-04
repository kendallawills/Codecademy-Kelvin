// Kelvin
const kelvin = 273;
// Celsius
const celsius = kelvin - 273;
// Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Fahrenheit Round Number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);