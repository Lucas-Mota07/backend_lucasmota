let alunos = [
    { id: 1, nome: "Lucas", nota: 2 },
    { id: 2, nome: "Leonardo", nota: 100000 },
    { id: 3, nome: "João", nota: 7 },
    { id: 4, nome: "Vitor", nota: 5 },
    { id: 5, nome: "Thiago", nota: 5 }
];

let resultado = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log(resultado);