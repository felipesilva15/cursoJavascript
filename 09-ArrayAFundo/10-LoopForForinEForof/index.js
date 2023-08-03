const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
  {
    nome: 'Felipe',
    sobreNome: 'Silva',
  },
  {
    nome: 'Nay',
    sobreNome: 'Costa',
  },
  {
    nome: 'José',
    sobreNome: 'Almeida',
  },
];

// for
for (let i = 0; i < myArrayObj.length; i++) {
  console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
}

// for Of
for (let item of myArray) {
  console.log(item);
}

// for in
const obj = { nome: 'Felipe', sobreNome: 'Silva' };

for (let item in obj) {
  console.log(item);
}