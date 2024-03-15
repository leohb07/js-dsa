// Inserir um elemento no inicio do array

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Ter em mente que o ultimo indice do array de tamanho N e N - 1 

// Numbers pode ter 10 valores, porem comeca do index 0

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1);
numbers.unshift(-1)
