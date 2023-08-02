// Declaration
function isValidDeclaration() {
    const soma = 1 + 2;

    if (soma === 3) {
        return true;
    }

    return false;
}

console.log(isValidDeclaration());

// Expression
const isValidExpression = function () {
    return false;
};

// Arrow function
const isValidArrow = () => {
    const multiplicacao = 2 * 2
    return multiplicacao;
};