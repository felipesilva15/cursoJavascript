const velocidade = 86;
const warn = 85;

const condicacao = velocidade >= warn ? console.log("Recebeu uma Multa!") : console.log("Continua Andando!");

if (velocidade >= warn) {
    console.log("Recebeu uma Multa!");
} else {
    console.log("Continua Andando!");
}