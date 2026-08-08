let aluno = {
    nome: "Lucas",
    idade: 16,
    cidade: "Cascavel",
    curso: "Desenvolvimento de Sistemas"
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);

aluno.cidade = "Curitiba";

console.log(`Nova cidade: ${aluno.cidade}`);