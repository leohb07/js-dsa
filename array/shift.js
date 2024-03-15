// Remove um elemento do inicio do array

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}
// Remove o primeiro elemento deslocando todos os elementos para a esquerda
// Porem o ultimo fica como undefined
console.log(numbers);

// Removendo o undefined

const newArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== undefined) {
    newArray.push(numbers[i]); // utilizando push
    newArray[newArray.length] = numbers[i]; // utilizando a forma manual
  }
}

console.log(newArray);
numbers.shift();
