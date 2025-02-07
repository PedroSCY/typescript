interface Entidade {
  id: number;
}

interface Vendavel {
  nome: string;
  preco: number;
  desconto: number;
}

class Produto implements Entidade, Vendavel {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number
  ) {}

  get precoFinal() {
    return this.preco * (1 - this.desconto)
  }
}

class Servico implements Entidade, Vendavel {
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number
      ) {}
}

const p1 = new Produto(123, "Caneta", 9.8, 0.05);
console.log(p1);
console.log(p1.precoFinal);

let v1: Vendavel = new Produto(321, "Caderno", 23, 0.1)
console.log(v1);

v1 = new Servico(321, "Taxi", 40, 0.25)
console.log(v1);

export {};
