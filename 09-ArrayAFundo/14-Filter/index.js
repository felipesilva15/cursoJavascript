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

// Filtra todo o conteúdo do array e retorna o valor para um novo array caso satisfaça a condição
const filterRefri = pedidos.filter((item) => {
    return item.bebida === "Refrigerante";
});

console.log(1, pedidos);
console.log(2, filterRefri);