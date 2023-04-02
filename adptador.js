class Pato {
  grasnar() {
    console.log("Quack quack!");
  }
  voar() {
    console.log("Voando como um pato.");
  }
}

class Galinha {
  cacarejar() {
    console.log("Cocoricó!");
  }
  voarBaixo() {
    console.log("Voando baixo, porque sou uma galinha.");
  }
}

class AdaptadorPato {
  constructor(pato) {
    this.pato = pato;
  }

  cacarejar() {
    this.pato.grasnar();
  }

  voarBaixo() {
    this.pato.voar();
  }
}

class AdaptadorPatoDemo {
  run() {
    const pato = new Pato();
    const adaptador = new AdaptadorPato(pato);

    const galinha = new Galinha();
    galinha.cacarejar(); // Cocoricó!
    galinha.voarBaixo(); // Voando baixo, porque sou uma galinha.

    adaptador.cacarejar(); // Quack quack!
    adaptador.voarBaixo(); // Voando como um pato.
  }
}

const demo = new AdaptadorPatoDemo();
demo.run();

/* Neste exemplo, a classe AdaptadorPato implementa a interface Galinha e possui uma referência ao objeto do tipo Pato que será adaptado. Em seguida, implementamos a lógica de cada método da interface Galinha que chama o método correspondente do objeto Pato.

Na classe AdaptadorPatoDemo, criamos uma instância de Pato, depois criamos uma instância de AdaptadorPato passando o pato como argumento e usamos a instância de AdaptadorPato para chamar os métodos da interface Galinha como se estivéssemos chamando um objeto do tipo Galinha.
 */