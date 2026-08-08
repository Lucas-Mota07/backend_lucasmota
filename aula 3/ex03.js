let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 100 },
    { id: 3, nome: "Fone", preco: 80 },
    { id: 4, nome: "Monitor", preco: 600 }
];

let produto = produtos.find(produto => produto.id === 3);

console.log(`Nome do produto: ${produto.nome}`);

let produtosCaros = produtos.filter(produto => produto.preco > 50);

console.log("Produtos com preço acima de R$ 50:");

for (let i = 0; i < produtosCaros.length; i++) {
    console.log(`${produtosCaros[i].nome} - R$ ${produtosCaros[i].preco}`);
}