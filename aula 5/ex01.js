const express = require("express");

const app = express();

app.get("/sobre", (req, res) => {
    res.json({
        nome: "Lucas",
        disciplina: "Desenvolvimento de Sistemas",
        ano: 2026
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});