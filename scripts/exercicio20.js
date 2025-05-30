let precos = [
  129.9,
  399.5,
  259.0,
  89.9,
  599.99,
  39.5,
  999.0
];

let moedaBrasileira = precos.map(preco => `R$: ${preco}`);
console.log(`Lista após exibir os preços no formato de moeda brasileira: ${moedaBrasileira}`);
