const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [
        { nome: 'Nike' },
        { nome: 'Adidas' }
    ],
    secret: 123456,
    n: 5,
    link: { 
        a: 'a é = a', 
        b: { 
            c: 'C é = c' 
        } 
    },
};
  
// Coloca o valor de cada propriedade do objeto em uma variável, e define um valor default
const { tamanho, estoque, marcas = 'Não possui Marca alguma!' } = Tenis;
console.log(tamanho, estoque, marcas);

// Renomeia a propriedade(Cria um alias)
const { secret: randomNumber, n: avaliacoes } = Tenis;

console.log(randomNumber);
console.log(avaliacoes);

// Pega o valor dentro de cada objeto, desestruturando cada um dos objetos(O último valor é o que vale)
const {
    link: {
        a,
        b: { c },
    },
} = Tenis;

console.log(a);

console.log(Tenis.link.a, Tenis.link.b.c);