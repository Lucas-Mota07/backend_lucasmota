const readline = require("readline-sync");

const somar = (a, b) => {
    return a + b;
};

const subtrair = (a, b) => {
    return a - b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const dividir = (a, b) => {
    if (b == 0) {
        return "Erro: divisao por zero";
    }

    return a / b;
};

let numero1 = readline.questionFloat("Digite o primeiro numero: ");
let numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log(`Soma: ${somar(numero1, numero2)}`);
console.log(`Subtracao: ${subtrair(numero1, numero2)}`);
console.log(`Multiplicacao: ${multiplicar(numero1, numero2)}`);
console.log(`Divisao: ${dividir(numero1, numero2)}`);