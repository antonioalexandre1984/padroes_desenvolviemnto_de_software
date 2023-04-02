
class Sanduiche {
  getDescricao() {
    return "Sanduíche";
  }

  getCusto() {
    return 0.0;
  }
}

class FrangoAssado extends Sanduiche {
  getDescricao() {
    return "Sanduíche de Frango Assado";
  }

  getCusto() {
    return 4.5;
  }
}

class IngredienteDecorator extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  getDescricao() {
    return this.sanduiche.getDescricao();
  }

  getCusto() {
    return this.sanduiche.getCusto();
  }
}

class Pepperoni extends IngredienteDecorator {
  constructor(sanduiche) {
    super(sanduiche);
  }

  getDescricao() {
    return this.sanduiche.getDescricao() + ", Pepperoni";
  }

  getCusto() {
    return this.sanduiche.getCusto() + 0.99;
  }
}

class QueijoMussarelaRalado extends IngredienteDecorator {
  constructor(sanduiche) {
    super(sanduiche);
  }

  getDescricao() {
    return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
  }

  getCusto() {
    return this.sanduiche.getCusto() + 2.0;
  }
}

// Criando o sanduíche de frango assado com pepperoni e queijo mussarela ralado
let sanduiche = new FrangoAssado();
sanduiche = new Pepperoni(sanduiche);
sanduiche = new QueijoMussarelaRalado(sanduiche);

console.log(sanduiche.getDescricao() + " custa $" + sanduiche.getCusto().toFixed(2) + ".");
