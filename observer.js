/* Para implementar o padrão Observer no projeto do editor de texto, podemos seguir os seguintes passos:

Criar uma classe Observer com um método update que será implementado pelas classes que desejam ser notificadas de mudanças no objeto observado.
Criar uma classe Observable que será o objeto observado. Ela deve ter um array de Observers, um método para adicionar Observers e um método para remover Observers.
A classe Editor deve estender Observable e implementar métodos para manipular o texto.
A classe TextEditor deve estender Editor e implementar os métodos insertLine e removeLine.
Criar uma classe Main que instancie um TextEditor, registre um listener para o evento "save" e comece a receber as linhas de texto do usuário até que ele envie "EOF". */

// Observer
class Observer {
  update() {}
}

// Observable
class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

// Editor
class Editor extends Observable {
  constructor() {
    super();
    this.text = "";
  }

  setText(text) {
    this.text = text;
    this.notify();
  }

  getText() {
    return this.text;
  }

  clear() {
    this.text = "";
    this.notify();
  }
}

// TextEditor
class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber, 0, text);
    this.setText(this.lines.join("\n"));
  }

  removeLine(lineNumber) {
    this.lines.splice(lineNumber, 1);
    this.setText(this.lines.join("\n"));
  }
}

// Main
class Main {
  constructor() {
    const textEditor = new TextEditor();
    textEditor.addObserver({
      update: (editor) => {
        console.log(editor.getText());
      },
    });

    // Receber linhas de texto do usuário
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log("Digite o texto:");

    rl.on("line", (input) => {
      if (input === "EOF") {
        rl.close();
        textEditor.notify();
      } else {
        textEditor.insertLine(textEditor.lines.length, input);
      }
    });

    textEditor.addObserver({
      update: () => {
        console.log(`Salvando conteúdo: ${textEditor.getText()}`);
      },
    });

    textEditor.notify();
  }
}

new Main();
