let diasFaltas = [
  "Carlos – Segunda",
  "Carlos – Terça",
  "Carlos – Quarta",
  "Carlos – Quinta",
  "Carlos – Sexta",
  "Carlos – Segunda (semana 2)",
  "Carlos – Terça (semana 2)",
  "Carlos – Quarta (semana 2)"
];

let semana = diasFaltas.filter(dia => !dia.includes("semana 2"));
console.log(`A primeira semana de férias ficou: ${semana}`);
