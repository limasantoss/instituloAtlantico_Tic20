const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(r => rl.question(q, r));

(async () => {
  let nome = await ask("Qual o seu nome? "); // string
  let idade = parseInt(await ask("Qual a sua idade? ")); // number

  // operador e expressão
  let mensagem = idade >= 18 
      ? `${nome}, você já pode dirigir! 🚗`
      : `${nome}, você ainda não pode dirigir. ❌`;

  console.log(mensagem); // estrutura de controle no operador ternário

  rl.close();
})();