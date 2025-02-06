import Validador from "./Validador";

class Produto {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desc: number = 0
  ) {
    Validador.maiorQueZero(id, "Id Invalido");
    Validador.entre(nome.length, 2, 250, "Tamanho do nome Invalido")
    Validador.maiorQueZero(preco, "Preço Invalido");
    Validador.entre(desc, 0, 0.8, "Desconto invalido")
  }

  get precoComDesconto() {
    return this.preco * (1 - this.desc);
  }
}

const p1 = new Produto(1, "Maçã", 20, 0.1);
console.log(p1.nome, p1.precoComDesconto);

console.log(Validador.ERRO_DESCONHECIDO)

export {};
