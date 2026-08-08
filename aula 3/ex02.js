let produtos = [
    { id: 1, nome: "Mouse", preco: 100 },
    { id: 2, nome: "Teclado", preco: 300 },
    { id: 3, nome: "Fone", preco: 80 },
    { id: 4, nome: "Monitor", preco: 600 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(`ID: ${produtos[i].id}`);
    console.log(`Nome: ${produtos[i].nome}`);
    console.log(`Preço: R$ ${produtos[i].preco}`);
}

produtos.push({ id: 5, nome: "Webcam", preco: 150 });

console.log(`Novo tamanho do array: ${produtos.length}`);