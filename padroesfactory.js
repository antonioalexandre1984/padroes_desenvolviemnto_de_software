// Interface comum para os produtos
class Computer {
    constructor(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }

    toString() {
        return `RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz, Type: ${this.type}`;
    }
}

// Fábrica para criar instâncias do tipo abstrato da interface
class ComputerFactory {
    createComputer(ram, hdd, cpu, type) {
        if (type === 'pc') {
            return new PC(ram, hdd, cpu);
        } else if (type === 'server') {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error('Tipo de computador inválido');
        }
    }
}

// Implementação da classe PC
class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, 'pc');
    }
}

// Implementação da classe Server
class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, 'server');
    }
}

// Uso da fábrica para criar instâncias de computadores
const factory = new ComputerFactory();
const pc = factory.createComputer(8, 256, 2.6, 'pc');
const server = factory.createComputer(32, 1024, 3.2, 'server');

// Impressão dos atributos dos computadores
console.log(pc.toString());
console.log(server.toString());
/* 
Nesse exemplo, a interface comum Computer define os atributos ram, hdd, cpu e type, além do método toString(), que imprime esses atributos formatados em uma string.

A fábrica ComputerFactory é responsável por criar instâncias do tipo abstrato Computer. Quando o método createComputer() é chamado com um conjunto de parâmetros, a fábrica decide qual tipo de computador deve ser instanciado (PC ou Server) e retorna a instância correspondente.

As classes PC e Server implementam a interface Computer, adicionando apenas o valor 'pc' ou 'server' ao atributo type, respectivamente.

Por fim, é criada uma instância da fábrica e são criadas duas instâncias de computadores (um PC e um Server), que são impressas no console através do método toString(). O resultado será:

RAM: 8GB, HDD: 256GB, CPU: 2.6GHz, Type: pc
RAM: 32GB, HDD: 1024GB, CPU: 3.2GHz, Type: server

 */