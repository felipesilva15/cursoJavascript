// Não precisa do nome da propriedade caso o nome do argumento seja o mesmo da propriedade
function Tenis(tamanho, estoque, preco) {
    return {
        tamanho,
        estoque,
        preco,
    };
}
  
console.log(Tenis(35, true, "R$ 35"));
  
const tamanho = 35;
const estoque = true;
const preco = "R$ 35";

const Tenis2 = {
    tamanho,
    estoque,
    preco,
};

console.log(Tenis2);

// Não precisa deixar implicito o nome function ou arrow function
const Tenis3 = {
    getTamanho() {
        return 35;
    },
};

console.log(Tenis3.getTamanho());