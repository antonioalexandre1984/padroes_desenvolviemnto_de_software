// Classe abstrata Veículo
class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {
    const clone = Object.create(this);
    clone.__proto__ = this;
    return clone;
  }

  represent() {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
  }
}

// Subclasse Carro
class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas, motor) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
    this.motor = motor;
  }

  represent() {
    return `${super.represent()}, Número de Portas: ${this.numeroPortas}, Motor: ${this.motor}`;
  }
}

// Subclasse Moto
class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, cilindrada) {
    super(modelo, marca, cor, numeroRodas);
    this.cilindrada = cilindrada;
  }

  represent() {
    return `${super.represent()}, Cilindrada: ${this.cilindrada}`;
  }
}

// Classe Aplicação
class Aplicacao {
  static criarVeiculos() {
    const veiculos = [];
    const carro1 = new Carro("Civic", "Honda", "Preto", 4, 4, "2.0");
    const carro2 = new Carro("Gol", "Volkswagen", "Branco", 4, 2, "1.6");
    const moto1 = new Moto("CBR 1000RR", "Honda", "Vermelho", 2, "1000");
    const moto2 = new Moto("S1000RR", "BMW", "Azul", 2, "1000");
    veiculos.push(carro1, carro2, moto1, moto2);
    return veiculos;
  }

  static clonarVeiculos(veiculos) {
    const clones = [];
    for (let veiculo of veiculos) {
      const clone = veiculo.clone();
      clones.push(clone);
    }
    return clones;
  }
}

// Teste
const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);
for (let clone of clones) {
  console.log(clone.represent());
}

/* 
Resultado:

Modelo: Civic, Marca: Honda, Cor: Preto, Número de Rodas: 4, Número de Portas: 4, Motor: 2.0
Modelo: Gol, Marca: Volkswagen, Cor: Branco, Número de Rodas: 4, Número de Portas: 2, Motor: 1.6
Modelo: CBR 1000RR, Marca: Honda, Cor: Vermelho, Número de Rodas: 2, Cilindrada: 1000
Modelo: S1000RR, Marca: BMW, Cor: Azul, Número de Rodas: 2, Cilindrada: 1000
 */