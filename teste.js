criar uma variavel constante chamada  'RL' = importar('o modulo readline') . função que ja tem dentro do modulo readline para criar interface({
fonte onde o nodjs vai ler os dados -teclado : entrada padão de processo onde o nodejs recebe os dados
fonte onde irá sair a saida de dados que é o  terminal : saida padrao do processo do Node.js })


const rl = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})