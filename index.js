// Classe que representa um herói de aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase(); 
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    } else {
      ataque = "usou um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Testando os heróis
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Lee", 40, "monge");
const heroi4 = new Heroi("Shinobi", 25, "ninja");

heroi1.atacar(); // O guerreiro atacou usando usou espada
heroi2.atacar(); // O mago atacou usando usou magia
heroi3.atacar(); // O monge atacou usando usou artes marciais
heroi4.atacar(); // O ninja atacou usando usou shuriken
