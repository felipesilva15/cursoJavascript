let Tenis = {
    tamanho: 45,
    estoque: true,
};
  
let link = { 
    link: {
        a: 'a', 
        b: {
            c: 'c' 
        } 
    } 
};

// Cloina o objeto
let clone1 = Tenis;

// Mesclando objetos de duas formas
let mesclar1 = Object.assign(Tenis, link);

// Este é um spread
let mesclar2 = { ...Tenis, ...link };

console.log(clone1);

clone1.estoque = false;
mesclar1.link.a = 'ABC';

// Toda a referência é mantida
console.log(mesclar1);
console.log(mesclar2);
console.log(Tenis);