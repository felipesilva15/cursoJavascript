const pedidos = [
    {
        id: 420,
        nome: 'Felipe',
        alimento: 'Sandubão de Bacon',
        bebida: 'Suco Limão',
    },
    {
        id: 152,
        nome: 'Naiady',
        alimento: 'Sandubão Vegano',
        bebida: 'Suco de Laranja',
    },
    { 
        id: 29, 
        nome: 'Marcio', 
        alimento: 'Coxinha', 
        bebida: 'Suco de Uva' 
    },
    {
        id: 33,
        nome: 'Isabel',
        alimento: 'Sandubão de Picanha',
        bebida: 'Refrigerante',
    },
    { 
        id: 55, 
        nome: 'José', 
        alimento: 'Pizza', 
        bebida: 'Refrigerante' 
    },
];

// Verifica todos os itens do array e retorna true se PELO MENOS UM satisfaça a condição
const existeAlimento = pedidos.some((element, index) => {
    return element.alimento === "Pizza";
});

console.log(existeAlimento);