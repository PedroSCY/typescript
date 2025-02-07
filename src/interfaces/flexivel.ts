interface Flexivel {
    nome: string,
    [atributo: string]: any
}

// É possivel atribuir abributos flexiveis a uma interface com o uso de [variavel:type]: type

const f1: Flexivel = {
    nome: 'Teste',
    idade: 52
}

console.log(f1)

export {}