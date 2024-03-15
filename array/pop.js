// Remover um elemento do final do array

// Pega o tamanho do array e remove o ultimo
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.pop();

console.log(numbers);

const lastIndex = numbers.length - 1;

// numbers.length = 10 - 1
numbers.length = lastIndex;

console.log(numbers);
