/*
  1 - Nome de função
  2 - Retorno
  3 - Não tem Hoisting
  4 - Arguments
*/

function nomeFunc() {
    return "Felipe Silva";
}
  
console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Felipe Silva";
};

console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "Felipe Silva";

console.log(nomeFuncArrowReturn());

const nomeFuncArrowHoisting = () => {
    return "Felipe Silva";
};

console.log(nomeFuncArrowHoisting());

// Não funciona o arguments

function nomeFuncArguments() {
    return arguments;
}

console.log(nomeFuncArguments("Felipe Silva"));

const nomeFuncArrowParams = (param) => param;

// 5 - Não pode ser invocada com New

function newFunc() {
    return "Felipe Silva";
}

console.log(new newFunc());

const newFuncArrow = () => {
    return "Felipe Silva";
};

console.log(new newFuncArrow()); // o New não vai Funcionar na Arrow Function

/* 
    6 - Contexto
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado, 
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
    no momento da chamada 

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente 
    como o contexto global, que no caso dos navegadores é window
*/

const lanches = {
    cardapio: [
        { nome: "x-salada", preco: "R$ 25" },
        { nome: "x-bolovo", preco: "R$ 30" },
    ],

    // O this representa o pai dessa func
    meuPedidoFunc: function (select) {
        return console.log(this.cardapio[select]);
    },

    // O bind adiciona o this ao contexto de "lanches" 
    meuPedidoFuncTimeOut: function () {
        setTimeout(
        function () {
            console.log(this.cardapio);
            console.log(this);
        }.bind(this),
        1000
        );
    },

    // O this representa somente essa arrow func
    meuPedidoArrowFunc: (select) => {
        this.cardapio = [
        { nome: "x-salada", preco: "R$ 25" },
        { nome: "x-bolovo", preco: "R$ 30" },
        ];

        return console.log(this.cardapio[select]);
    },
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();

/*
    7 - Constructor
    Arrow functions não podem ser constructors, então não é possível usar o operador 
    new com a mesma.
*/

class newFunc {
    constructor(nome) {
        this.nome = nome;
    }
}

const a = new newFunc("Felipe Silva");
console.log(a.nome);