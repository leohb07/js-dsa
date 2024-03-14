// exit VAR

// Let e const
let language = "Ingles";

const pi = 3.141593;

// Template literals -> torna possivel inserir qualquer coisa dentro de uma string
`${pi}`;

// Rest -> ...rest

const params = [1, 2, 3];
const newParams = [...params, 4, 5, 6];
console.log(newParams);

// Destructure array

let [x, y] = ["a", "b"];

// swap -> antigamente tinha que criar uma variavel temp
[x, y] = [y, x];
console.log(x, y);

// Property shorthand

let [a, b] = [1, 2];
let obj = { a, b };
console.log(obj);

// Shorthand method names

const hello = {
  name: "abcdef",
  // Antigamente: printHello: function ().....
  printHello() {
    console.log("Hello");
  },
};

// ES6 trouxe a OOP com classes ao JS

class Book {
  constructor() {}
}
