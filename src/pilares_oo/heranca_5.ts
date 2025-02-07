abstract class Celular {
    ligar() {
        console.log('Em ligação')
    }

    abstract acessarRedeMovel(): void
}

class Iphone13Pro extends Celular {
    acessarRedeMovel(): void {
        console.log('Acessando rede 12G')
    }

}

// const c1 = new Celular() não é possivel instanciar uma classe abstrata

const c1 = new Iphone13Pro()
c1.ligar()


export {}