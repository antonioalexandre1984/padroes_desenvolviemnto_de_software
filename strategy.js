// Interface Strategy
class Operacao {
  execute(num1, num2) {}
}

// Classes concretas que implementam a Strategy
class Soma extends Operacao {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class Subtracao extends Operacao {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class Multiplicacao extends Operacao {
  execute(num1, num2) {
    return num1 * num2;
  }
}

// Classe Contexto
class Calculadora {
  constructor() {
    this.operacao = null;
  }

  setOperacao(operacao) {
    this.operacao = operacao;
  }

  calcular(num1, num2) {
    if (!this.operacao) {
      console.log("Selecione uma operação antes de calcular.");
      return;
    }
    const resultado = this.operacao.execute(num1, num2);
    console.log(`O resultado da operação é: ${resultado}`);
  }
}

// Exemplo de uso
const calculadora = new Calculadora();
const soma = new Soma();
const subtracao = new Subtracao();
const multiplicacao = new Multiplicacao();

// Realizando uma soma
calculadora.setOperacao(soma);
calculadora.calcular(10, 5);

// Realizando uma subtração
calculadora.setOperacao(subtracao);
calculadora.calcular(10, 5);

// Realizando uma multiplicação
calculadora.setOperacao(multiplicacao);
calculadora.calcular(10, 5);

/* 
Com essa implementação, é possível realizar operações de soma, subtração e multiplicação de números inteiros de maneira simples e flexível. É possível adicionar novas operações implementando a interface Operacao e criando novas classes concretas que implementam o método execute(). Além disso, a classe Calculadora pode ser facilmente expandida para suportar outras funcionalidades. */
