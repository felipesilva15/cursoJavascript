const myArrayObj = [
    {
        nome: 'Felipe',
        sobreNome: 'Silva',
    },
    {
        nome: 'Nay',
        sobreNome: 'Silva',
    },
    {
        nome: 'José',
        sobreNome: 'Silva',
    },
];
  
myArrayObj.forEach((item, i) => {
    if (item.nome === 'Nay') {
        return console.log('O Mozão está te esperando');
    }

    console.log(i, item.nome);
});