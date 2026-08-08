const readline = require("readline-sync");

let produtos = [];

for (let i = 0; i < 3; i++) {
    let nome = readline.question("Digite o nome do produto: ");
    let preco = readline.questionFloat("Digite o preco do produto: ");

    produtos.push({
        nome: nome,
        preco: preco
    });
}

let produtosacimade20 = produtos.filter(produto => produto.preco > 20);

console.log("Produtos acima de R$ 20:");

for (let i = 0; i < produtosacimade20.length; i++) {
    console.log(`${produtosacimade20[i].nome} - R$ ${produtosacimade20[i].preco}`);
}