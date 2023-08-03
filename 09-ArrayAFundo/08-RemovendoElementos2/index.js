let arr = [
    { nome: 'Felipe', tel: '(99) 99999 9999' },
    { nome: 'Mozao', tel: '(99) 99999 9999' },
    { nome: 'Amigo 1', tel: '(99) 99999 9999' },
    { nome: 'Amigo 2', tel: '(99) 99999 9999' },
    { nome: 'Amigo 3', tel: '(99) 99999 9999' },
];

console.table(arr);

// Pega os dados dentro de um range sem alterar o valor original
const newArray = arr.slice(2, 4);
console.table(newArray);

// Remove os dados do array dentro de um range e retorna o dado excluido
console.log(arr.splice(4, 1));
console.table(arr);