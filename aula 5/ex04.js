const express = require('express');
const app = express();

const produtos = [
    { id: 1, nome: 'Teclado', preco: 80 },
    { id: 2, nome: 'Mouse', preco: 120 },
    { id: 3, nome: 'Monitor', preco: 800 },
    { id: 4, nome: 'Headset', preco: 150 }
];

app.get('/produtos/caros', (req, res) => {
    const produtosCaros = produtos.filter(produto => produto.preco > 100);

    res.status(200).json(produtosCaros);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});