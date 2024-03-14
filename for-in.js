const wes = {
  name: "wes",
  age: 100,
  cool: true,
};

for (const prop in wes) {
  console.log(prop); // Percorre o objeto pegando a sua chave, nao o valor
}
