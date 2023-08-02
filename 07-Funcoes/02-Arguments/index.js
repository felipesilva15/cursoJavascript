function soma(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        return NaN;
    }

    return num1 + num2;
}

console.log(soma(5, 6));

function subtracao(num1 = 0, num2 = 0) {
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        return NaN;
    }

    return num1 - num2;
}