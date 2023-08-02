// IIFE = Immediately Invoked Function Expression
// IIFE = Expressão de função invocada imediatamente

// Já é invocada no mesmo momento
// Seu contexto é isolado
(function(num1, num2) {
    const calc = num1 + num2
    console.log(calc);
})(2, 1);

(() => {
    var teste = "teste1";
    console.log(teste);
})();

function consol(con) {
    return console.log(con);
}

consol('Felipe')