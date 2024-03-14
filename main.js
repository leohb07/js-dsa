/**
 * Number
 * String
 * Boolean
 * Function
 * Object
 * Undefined
 * Null
 * Array
 * Data
 * Regexp
 */

// Null -> Sem valor
// Undefined -> Foi declarada mas nao recebeu nenhum valor ainda

// Dados primitivos -> null, undefined, string, number, boolean e symbol
// Dados nao primitivos -> objetos JS, incluido funcoes, arrays e expressoes regulares

// IF, Else IF, else

const month = 5;

if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("February");
} else if (month === 3) {
  console.log("March");
} else {
  console.log("Month is not January, February or March");
}

// switch
// Usar switch caso for verificar a mesma variavel diversas vezes

// Case -> determina se o valor de switch e igual ao valor da clausula case
// Break -> ele impede que a instrucao switch execute o restante da instrucao

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Month is not January, February or March");
}

// For -> O script dentro do laco sera executado enquanto essa condicao for verdadeira

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while -> O bloco de codigo dentro do laco while sera executado enquanto a codicao for verdadeira

// While e ideal quando nao saber o tamanho do que iremos percorrer
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while -> executa primeiro e depois verifica a condicao

let x = 0;
do {
  console.log(x);
  x++;
} while (x < 10);

// while com continue

let n = 0;
let j = 0;

while (n < 5) {
  n++;
  if (n === 3) {
    continue;
  }
  j += n;
}

// For in -> utilizar para percorrer objetos

const obj = {
  firstName: "Leonardo",
  lastName: "Barrocal",
};

for (const i in obj) {
  console.log(`For IN: ${i}`);
}

// For of -> utilizar para arrays

const arrayTest = [1, 2, 3];

for (const item of arrayTest) {
  console.log(item);
}

/**
 * Use um loop for para iterar em um array.
 * Use um loop for quando souber que o loop deve ser executado n vezes.
 * Use um loop while para ler um arquivo em uma variável.
 * Use um loop while ao solicitar a entrada do usuário.
 * Use um loop while quando o valor do incremento não for padrão.
 */
