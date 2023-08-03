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
        nome: 'José 0',
        sobreNome: 'Silva',
    },
    {
        nome: 'José 1',
        sobreNome: 'Silva',
    },
    {
        nome: 'José 2',
        sobreNome: 'Silva',
    },
    {
        nome: 'José 3',
        sobreNome: 'Silva',
    },
];
  
for (let item of myArrayObj) {
    // Passa para o próximo item
    if (item.nome === 'Nay') {
        console.log('O mozão ta te esperando');
        continue;
    }

    // Para o laço de repetição
    if (item.nome === 'José 1') {
        console.log('Lembrar de enviar um SMS');
        break;
    }

    console.log(item);
}