const express = require("express");

const app = express();

app.get("/sobre", (req, res) => {
    res.json({
        nome: "Lucas",
        disciplina: "Desenvolvimento de Sistemas",
        ano: 2026
    });
});

app.get("/produtos", (req, res) => {
    const produtos = [
        { id: 1, nome: "Mouse", preco: 50 },
        { id: 2, nome: "Teclado", preco: 100 },
        { id: 3, nome: "Fone", preco: 80 },
        { id: 4, nome: "Monitor", preco: 600 }
    ];

    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});