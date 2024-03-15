// Inserir um elemento no final do array

// Em JS, um array e um objeto mutavel, podemos facilmente lhe acrescentar novos elementos
// Agora em linguagens como C ou Java, e preciso determinar o tamanho do array, caso queira adicionar mais elementos, devera criar um novo array

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// metodo padrao
numbers[numbers.length] = 10;

console.log(numbers);

// A API do javascript tem o metodo chamado push, podemos acrescentar quantos elementos quisermos
numbers.push(11);
numbers.push(12, 13, 14);

console.log(numbers);