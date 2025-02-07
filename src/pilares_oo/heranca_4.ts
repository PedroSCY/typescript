class Carro {
  private _velocidade: number = 0;

  constructor(readonly velocidadeMaxima: number = 200) {}

  get velocidade() {
    return this._velocidade;
  }

  public acelerar() {
    this.alterarVelocidade(27);
  }

  public frear() {
    this.alterarVelocidade(-35);
  }

  protected alterarVelocidade(delta: number) {
    const novaVelocidade = this._velocidade + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this._velocidade = novaVelocidade;
    } else if (novaVelocidade > this.velocidadeMaxima) {
      this._velocidade = this.velocidadeMaxima;
    } else {
      this._velocidade = 0;
    }
  }
}


class Fusca extends Carro {
    constructor() {
        super(120)
    }
}

class Porche extends Carro {
    constructor() {
        super(320)
    }

    public acelerar(): void {
        this.alterarVelocidade(55)
    }
}

let c1: Carro = new Fusca()

console.log( "Fusca" ,c1.velocidade,"/", c1.velocidadeMaxima)
c1.acelerar()
c1.acelerar()
console.log( "Fusca" ,c1.velocidade,"/", c1.velocidadeMaxima)

c1 = new Porche()
console.log( "Porche" ,c1.velocidade,"/", c1.velocidadeMaxima)
c1.acelerar()
c1.acelerar()
console.log( "Porche" ,c1.velocidade,"/", c1.velocidadeMaxima)


export {};
