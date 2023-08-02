// Name
function Name(name, sobrenome) {
    this.name = name;
  
    this.sobreNome = () => {
      const nomeCompleto = `${this.name} ${sobrenome}`;
      return nomeCompleto;
    };
}

const felipe = new Name("Felipe", "Silva");

console.log(felipe.sobreNome());

// Calculadora
function Calculadora() {
    this.soma = (num1, num2) => {
        return `${num1 + num2}`;
    };

    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`;
    };
}

const calculadora = new Calculadora();

console.log(calculadora.soma(9, 3));
console.log(calculadora.subtracao(2, 8));