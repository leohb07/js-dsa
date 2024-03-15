const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 2;

// Quais sao os 20 primeiros numeros da sequencia de fibonacci?
for (let i = 3; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// Segundo for existe apenas para mostrar os valores
for (let i = 1; i < fibonacci.length; i++) {
  // console.log(fibonacci[i]);
}


