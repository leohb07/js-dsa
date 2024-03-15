// Remove um elemento especificando a posicao/indice e a quantidade

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// A partir do index 2, remover 2 elementos
numbers.splice(2, 2);

console.log(numbers);

// A partir do index 2, nao remover "0", adicionar o valor 2, 3
numbers.splice(2, 0, 2, 3);

console.log(numbers);
